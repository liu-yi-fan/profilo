import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client.
 * Uses the anon key — RLS policies on `contacts` allow anonymous inserts.
 * Call this inside Server Actions / Route Handlers only.
 */
export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  return createClient(url, key);
}
