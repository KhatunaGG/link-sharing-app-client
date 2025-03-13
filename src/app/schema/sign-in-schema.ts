import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, "At least 4 characters")
    .max(11, "No more than 11 characters"),
});
