import { faker } from "@faker-js/faker";

import { createMockUsers } from "./createMockUser";

import { Team } from "@/schema/Team.type";

export const createMockTeam = (): Team => {
  const id = faker.string.uuid();
  const members = createMockUsers(Math.floor(Math.random() * 3) + 1);
  const name = faker.company.name();

  return {
    id,
    name,
    members,
  };
};

export const createMockTeams = (count: number): Team[] => {
  return Array.from({ length: count }, () => {
    return createMockTeam();
  });
};
