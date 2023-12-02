import { Problem } from "@/schema/Problem.type";
import { faker } from "@faker-js/faker";

export const createMockProblem = (): Problem => {
  const name = faker.lorem.word();
  // 100の倍数でランダムな値を生成
  const score = faker.number.int({ min: 1, max: 30 }) * 100;
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
