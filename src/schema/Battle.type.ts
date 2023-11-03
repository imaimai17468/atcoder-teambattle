import { z } from "zod";
import { ProblemSchema } from "./Problem.type";
import { TeamSchema } from "./Team.type";
import { ScoreSchema } from "./Score.type";

export const BattleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  startDate: z.number(),
  endDate: z.number(),
  problems: z.array(ProblemSchema),
  teams: z.array(TeamSchema),
  scores: z.array(ScoreSchema),
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
  deletedAt: z.number().nullable(),
});
