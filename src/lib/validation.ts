import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),
  email: z
    .string()
    .refine(
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Invalid email address"
    ),
  phone: z.string().refine(isValidPhoneNumber, {
    message: "Invalid phone number",
  }),
});
