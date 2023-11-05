import { z } from "zod";

export const ProblemSchema = z.object({
  name: z.string(),
  score: z.number(),
  link: z.string(),
});

export type Problem = z.infer<typeof ProblemSchema>;
