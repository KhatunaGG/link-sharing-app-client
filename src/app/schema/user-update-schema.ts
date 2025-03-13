import { z } from "zod";

export const UserUpdateSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Too long" }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .max(70, { message: "Too long" }),
  filePath: z.string(),
});
