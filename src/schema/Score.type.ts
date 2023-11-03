import { z } from "zod";
import { UserSchema } from "./User.type";
import { ProblemSchema } from "./Problem.type";
import { TeamSchema } from "./Team.type";

export const ScoreSchema = z.object({
  team: TeamSchema,
  totalScore: z.number(),
  userScore: z.object({
    user: UserSchema,
    userTotalScore: z.number(),
    problems: z.array(
      z.object({
        problem: ProblemSchema,
        isCollect: z.boolean(),
      }),
    ),
  }),
});
