import { createMockTeam } from "./createMockTeam";
import { Score } from "@/schema/Score.type";
import { faker } from "@faker-js/faker";
import { Problem } from "@/schema/Problem.type";

export const createMockScore = ({
  problems,
}: {
  problems: Problem[];
}): Score => {
  const team = createMockTeam();

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

export const createMockScores = ({
  count,
  problems,
}: {
  count: number;
  problems: Problem[];
}): Score[] => {
  return Array.from({ length: count }, () => createMockScore({ problems }));
};
