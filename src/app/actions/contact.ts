"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/schemas/contact";
import { checkRateLimit } from "@/lib/rateLimit";
import { createServerSupabaseClient } from "@/lib/supabase";
import type { ContactActionState } from "./contact-types";

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  // ── 1. Rate limit by IP ──────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  const { allowed, retryAfterSecs } = checkRateLimit(ip);
  if (!allowed) {
    return {
      success: false,
      message: `Too many submissions. Please try again in ${retryAfterSecs} seconds.`,
    };
  }

  // ── 2. Parse & validate with Zod ────────────────────────────────────────
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization") || undefined,
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, organization, message } = parsed.data;

  // ── 3. Insert into Supabase ──────────────────────────────────────────────
  try {
    const supabase = createServerSupabaseClient();

    const { error } = await supabase
      .from("contacts")
      .insert({ name, email, organization: organization ?? null, message });

    if (error) {
      console.error("[submitContact] Supabase error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      };
    }
  } catch (err) {
    console.error("[submitContact] Unexpected error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Message sent! I'll get back to you soon.",
  };
}
