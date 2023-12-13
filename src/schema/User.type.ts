import { z } from "zod";
import { charMinLimitError, charMaxLimitError } from "@/utils/createErrors";

export const ATCODER_ID_MAX_LENGTH = 16;
export const NAME_MAX_LENGTH = 32;
export const BIO_MAX_LENGTH = 1000;
export const OCCUPATION_MAX_LENGTH = 32;
export const ORGANIZATION_MAX_LENGTH = 32;

export const UserLinksSchema = z.object({
  github: z.string().url({ message: "Invalid URL" }).or(z.literal("")),
  twitter: z.string().url({ message: "Invalid URL" }).or(z.literal("")),
  website: z.string().url({ message: "Invalid URL" }).or(z.literal("")),
});

export const UserSchema = z.object({
  id: z.string(),
  atcoderId: z
    .string()
    .min(1, { message: charMinLimitError("AtCoder ID", 1) })
    .max(ATCODER_ID_MAX_LENGTH, {
      message: charMaxLimitError("AtCoder ID", ATCODER_ID_MAX_LENGTH),
    }),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(NAME_MAX_LENGTH, {
      message: charMaxLimitError("Name", NAME_MAX_LENGTH),
    }),
  icon: z.string(),
  bio: z.string().max(BIO_MAX_LENGTH, {
    message: charMaxLimitError("Bio", BIO_MAX_LENGTH),
  }),
  occupation: z.string().max(OCCUPATION_MAX_LENGTH, {
    message: charMaxLimitError("Occupation", OCCUPATION_MAX_LENGTH),
  }),
  organization: z.string().max(ORGANIZATION_MAX_LENGTH, {
    message: charMaxLimitError("Organization", ORGANIZATION_MAX_LENGTH),
  }),
  links: UserLinksSchema,
});

export type User = z.infer<typeof UserSchema>;

export const INITIAL_USER: User = {
  id: "",
  atcoderId: "",
  name: "",
  icon: "",
  bio: "",
  occupation: "",
  organization: "",
  links: {
    github: "",
    twitter: "",
    website: "",
  },
};
