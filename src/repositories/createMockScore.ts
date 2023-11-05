import { createMockTeam } from "./createMockTeam";
import { createMockProblems } from "./createMockProblem";
import { Score } from "@/schema/Score.type";
import { faker } from "@faker-js/faker";

export const createMockScore = (): Score => {
  const team = createMockTeam();
  const problems = createMockProblems(5);

  const userScore = team.members.map((user) => {
    const problemWithCorrectness = problems.map((problem) => ({
      problem,
      isCollect: Math.random() > 0.5,
      time: faker.date.future().getTime(),
    }));

    return {
      user,
      problemWithCorrectness,
    };
  });

  return {
    team,
    userScore,
  };
};

export const createMockScores = (count: number): Score[] => {
  return Array.from({ length: count }, createMockScore);
};
