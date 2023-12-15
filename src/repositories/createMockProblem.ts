import { faker } from "@faker-js/faker";

import { Problem } from "@/schema/Problem.type";

export const createMockProblem = (): Problem => {
  const name = faker.lorem.word();
  const score = faker.number.int({ min: 1, max: 50 }) * 100;
  const difficulty =
    score * (1 + faker.number.float({ min: -0.25, max: 0.25 }));
  const link = faker.internet.url();

  return {
    name,
    score,
    link,
    difficulty,
  };
};

export const createMockProblems = (count: number): Problem[] => {
  return Array.from({ length: count }, createMockProblem);
};
