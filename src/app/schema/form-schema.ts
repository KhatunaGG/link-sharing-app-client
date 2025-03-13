import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(4, "Password must be at least 4 characters")
  .max(11, "Password must be no more than 11 characters");

export const confirmPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(4, "Confirm password must be at least 4 characters")
      .nonempty("Confirm password is required"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords don't match",
      });
    }
  });

export const signUpSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
  })
  .and(confirmPasswordSchema);
