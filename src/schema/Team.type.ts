import { z } from "zod";
import { UserSchema } from "./User.type";

export const TeamSchema = z.object({
  members: z.array(UserSchema),
});
