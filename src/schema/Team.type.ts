import { z } from "zod";
import { UserSchema } from "./User.type";

export const TeamSchema = z.object({
  name: z.string(),
  members: z.array(UserSchema),
});

export type Team = z.infer<typeof TeamSchema>;
