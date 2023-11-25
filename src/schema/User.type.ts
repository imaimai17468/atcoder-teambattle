import { z } from "zod";

export const ATCODER_ID_MAX_LENGTH = 16;
export const NAME_MAX_LENGTH = 32;
export const BIO_MAX_LENGTH = 1000;
export const OCCUPATION_MAX_LENGTH = 32;
export const ORGANIZATION_MAX_LENGTH = 32;

export const UserLinksSchema = z.object({
  github: z.string().url({ message: "Invalid URL" }).nullable(),
  twitter: z.string().url({ message: "Invalid URL" }).nullable(),
  website: z.string().url({ message: "Invalid URL" }).nullable(),
});

export const UserSchema = z.object({
  id: z.string(),
  atcoderId: z
    .string()
    .min(1, { message: "AtCoder ID is required" })
    .max(ATCODER_ID_MAX_LENGTH, {
      message: `AtCoder ID must be less than ${ATCODER_ID_MAX_LENGTH} characters`,
    }),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(NAME_MAX_LENGTH, {
      message: `Name must be less than ${NAME_MAX_LENGTH} characters`,
    }),
  icon: z.string(),
  bio: z
    .string()
    .max(BIO_MAX_LENGTH, {
      message: `Bio must be less than ${BIO_MAX_LENGTH} characters`,
    })
    .nullable(),
  occupation: z
    .string()
    .max(OCCUPATION_MAX_LENGTH, {
      message: `Occupation must be less than ${OCCUPATION_MAX_LENGTH} characters`,
    })
    .nullable(),
  organization: z
    .string()
    .max(ORGANIZATION_MAX_LENGTH, {
      message: `Organization must be less than ${ORGANIZATION_MAX_LENGTH} characters`,
    })
    .nullable(),
  links: UserLinksSchema,
});

export type User = z.infer<typeof UserSchema>;
