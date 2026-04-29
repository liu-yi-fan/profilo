import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  organization: z
    .string()
    .max(100, "Organization must be 100 characters or fewer")
    .optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message must be 2000 characters or fewer"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
