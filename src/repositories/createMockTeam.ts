import { Team } from "@/schema/Team.type";
import { createMockUsers } from "./createMockUser";
import { faker } from "@faker-js/faker";

export const createMockTeam = (): Team => {
  const members = createMockUsers(Math.floor(Math.random() * 3) + 1);
  const name = faker.company.name();

  return {
    name,
    members,
  };
};

export const createMockTeams = (count: number): Team[] => {
  return Array.from({ length: count }, () => {
    const members = createMockUsers(Math.floor(Math.random() * 3) + 1);
    const name = faker.company.name();

    return {
      name,
      members,
    };
  });
};
