import { z } from "zod";
import { ScoreSchema } from "./Score.type";
import { ProblemSchema } from "./Problem.type";
import { UserSchema } from "./User.type";
import { charMinLimitError, charMaxLimitError } from "@/utils/createErrors";
import { TeamSchema } from "./Team.type";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 1000;

export const BattleSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(1, { message: charMinLimitError("Title", 1) })
    .max(TITLE_MAX_LENGTH, {
      message: charMaxLimitError("Title", TITLE_MAX_LENGTH),
    }),
  description: z
    .string()
    .min(1, { message: charMinLimitError("Description", 1) })
    .max(DESCRIPTION_MAX_LENGTH, {
      message: charMaxLimitError("Description", DESCRIPTION_MAX_LENGTH),
    }),
  startDate: z.number(),
  endDate: z.number(),
  teams: z.array(TeamSchema).nullable(),
  scores: z.array(ScoreSchema).nullable(),
  problems: z.array(ProblemSchema),
  owner: UserSchema,
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
  deletedAt: z.number().nullable(),
});

export type Battle = z.infer<typeof BattleSchema>;
