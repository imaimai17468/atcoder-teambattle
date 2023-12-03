import { Problem } from "@/schema/Problem.type";
import { faker } from "@faker-js/faker";

export const createMockProblem = (): Problem => {
  const name = faker.lorem.word();
  const score = faker.number.int({ min: 1, max: 50 }) * 100;
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
