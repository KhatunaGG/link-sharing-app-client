import { z } from "zod";

export const linkSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  link: z
    .string()
    .min(1, { message: "Link is required" })
    .url({ message: "Link must be a valid URL" }),
});

export type LinkItemType = z.infer<typeof linkSchema>;
