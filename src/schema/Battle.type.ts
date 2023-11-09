import { z } from "zod";
import { ScoreSchema } from "./Score.type";
import { ProblemSchema } from "./Problem.type";

export const BattleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  startDate: z.number(),
  endDate: z.number(),
  scores: z.array(ScoreSchema),
  problems: z.array(ProblemSchema),
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
  deletedAt: z.number().nullable(),
});

export type Battle = z.infer<typeof BattleSchema>;
