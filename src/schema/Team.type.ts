import { z } from "zod";
import { UserSchema } from "./User.type";
import {
  charMinLimitError,
  charMaxLimitError,
  arrayMinLimitError,
} from "@/utils/createErrors";

export const TeamSchema = z.object({
  name: z
    .string()
    .min(1, { message: charMinLimitError("Name", 1) })
    .max(50, {
      message: charMaxLimitError("Name", 50),
    }),
  members: z.array(UserSchema).min(1, {
    message: arrayMinLimitError("Members", 1),
  }),
});

export type Team = z.infer<typeof TeamSchema>;
