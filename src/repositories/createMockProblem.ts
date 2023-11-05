import { Problem } from "@/schema/Problem.type";
import { faker } from "@faker-js/faker";

export const createMockProblem = (): Problem => {
  const name = faker.lorem.sentence();
  const score = faker.number.int({ min: 100, max: 1000 });
  const link = faker.internet.url();

  return {
    name,
    score,
    link,
  };
};

export const createMockProblems = (count: number): Problem[] => {
  return Array.from({ length: count }, createMockProblem);
};
