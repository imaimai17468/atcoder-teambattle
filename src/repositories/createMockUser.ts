import { User } from "@/schema/User.type";
import { faker } from "@faker-js/faker";

export const createMockUser = (): User => {
  const name = faker.person.fullName();
  const color = faker.internet.color();
  const icon = faker.image.avatar();
  const bio = faker.lorem.paragraph();

  return {
    name,
    color,
    icon,
    bio,
  };
};

export const createMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, createMockUser);
};
