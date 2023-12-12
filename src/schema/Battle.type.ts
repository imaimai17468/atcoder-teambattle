import { z } from "zod";
import { ScoreSchema } from "./Score.type";
import { ProblemSchema } from "./Problem.type";
import { UserSchema } from "./User.type";
import {
  charMinLimitError,
  charMaxLimitError,
  arrayMinLimitError,
  dateMinLimitError,
} from "@/utils/createErrors";
import { INITIAL_USER } from "./User.type";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 1000;

export const BattleSchema = z
  .object({
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
    endDate: z.number().min(Date.now(), {
      message: dateMinLimitError("End date", new Date(Date.now())),
    }),
    scores: z.array(ScoreSchema).nullable(),
    problems: z.array(ProblemSchema).min(1, {
      message: arrayMinLimitError("Problems", 1),
    }),
    owner: UserSchema,
    createdAt: z.number(),
    updatedAt: z.number().nullable(),
    deletedAt: z.number().nullable(),
  })
  .refine((data) => data.startDate < data.endDate, {
    message: "Start date must be before end date.",
    path: ["endDate"],
  });

export type Battle = z.infer<typeof BattleSchema>;

export const INITIAL_BATTLE: Battle = {
  id: "",
  title: "",
  description: "",
  startDate: 0,
  endDate: 0,
  scores: null,
  problems: [],
  owner: INITIAL_USER,
  createdAt: 0,
  updatedAt: null,
  deletedAt: null,
};
