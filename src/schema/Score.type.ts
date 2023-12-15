import { z } from "zod";

import { ProblemSchema } from "./Problem.type";
import { TeamSchema } from "./Team.type";
import { UserSchema } from "./User.type";

export const ScoreSchema = z.object({
  team: TeamSchema,
  userScore: z.array(
    z.object({
      user: UserSchema,
      problemWithCorrectness: z
        .array(
          z.object({
            problem: ProblemSchema,
            isCorrect: z.boolean(),
            time: z.number(),
          }),
        )
        .min(1, {
          message: "⇩ Please register problems from “Problem Set” section. ⇩",
        }),
    }),
  ),
});

export type Score = z.infer<typeof ScoreSchema>;
