import { createMockScores } from "./createMockScore";
import { Battle } from "@/schema/Battle.type";
import { faker } from "@faker-js/faker";

export const createMockBattle = (): Battle => {
  const id = faker.string.uuid();
  const title = faker.company.name();
  const description = faker.lorem.paragraph();
  const scores = createMockScores(10);
  const startDate = faker.date.past().getTime();
  const endDate = faker.date.future().getTime();
  const createdAt = faker.date.past().getTime();

  return {
    id,
    title,
    description,
    startDate,
    endDate,
    scores,
    createdAt,
    updatedAt: null,
    deletedAt: null,
  };
};

export const createMockBattles = (count: number): Battle[] => {
  return Array.from({ length: count }, () => createMockBattle());
};
