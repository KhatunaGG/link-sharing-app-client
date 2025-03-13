import { z } from "zod";

export const otpSchema = z.object({
  otpCode: z
    .string()
    .length(6, "OTP must be exactly 6 characters")
    .regex(/^\d{6}$/, "OTP must be numeric"),
});
