import { faker } from "@faker-js/faker";

import { User } from "@/schema/User.type";

export const createMockUser = (): User => {
  const id = faker.string.uuid();
  const atcoderId = faker.internet.userName();
  const name = faker.person.fullName();
  const icon = faker.image.avatar();
  const bio = faker.lorem.paragraph();
  const occupation = faker.person.jobTitle();
  const organization = faker.company.name();
  const links = {
    github: faker.internet.url(),
    twitter: faker.internet.url(),
    website: faker.internet.url(),
  };

  return {
    id,
    atcoderId,
    name,
    icon,
    bio,
    occupation,
    organization,
    links,
  };
};

export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, createMockUser);
};
