import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  color: z.string(),
  icon: z.string(),
});

export type User = z.infer<typeof UserSchema>;
