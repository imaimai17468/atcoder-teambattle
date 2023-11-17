import { z } from "zod";

export const UserLinksSchema = z.object({
  github: z.string().nullable(),
  twitter: z.string().nullable(),
  website: z.string().nullable(),
});

export const UserSchema = z.object({
  id: z.string(),
  AtCoderID: z.string(),
  name: z.string(),
  icon: z.string(),
  bio: z.string().nullable(),
  occupation: z.string().nullable(),
  organization: z.string().nullable(),
  links: UserLinksSchema,
});

export type User = z.infer<typeof UserSchema>;
