import { faker } from "@faker-js/faker";

import { createMockProblems } from "./createMockProblem";
import { createMockScores } from "./createMockScore";
import { createMockUser } from "./createMockUser";

import { Battle } from "@/schema/Battle.type";

export const createMockBattle = ({
  variant,
}: {
  variant?: "upcoming" | "recent" | "running";
}): Battle => {
  const id = faker.string.uuid();
  const title = faker.company.name();
  const description = faker.lorem.paragraph();
  const problems = createMockProblems(faker.number.int({ min: 5, max: 10 }));
  const scores = createMockScores({
    count: faker.number.int({ min: 3, max: 10 }),
    problems,
  });
  const owner = createMockUser();

  const createdAt = faker.date.past().getTime();

  let startDate = faker.date.recent().getTime();
  let endDate = faker.date.soon().getTime();

  if (variant === "upcoming") {
    endDate = faker.date.future().getTime();
    startDate = faker.date.between({ from: new Date(), to: endDate }).getTime();
  } else if (variant === "recent") {
    startDate = faker.date.past().getTime();
    endDate = faker.date.between({ from: startDate, to: new Date() }).getTime();
  }

  return {
    id,
    title,
    description,
    startDate,
    endDate,
    scores,
    problems,
    owner,
    createdAt,
    updatedAt: null,
    deletedAt: null,
  };
};

export const createMockBattles = ({
  count,
  variant,
}: {
  count: number;
  variant?: "upcoming" | "recent" | "running";
}): Battle[] => {
  return Array.from({ length: count }, () => createMockBattle({ variant }));
};

export const createMockAllTimeBattle = (): {
  upcomingBattles: Battle[];
  recentBattles: Battle[];
  runningBattles: Battle[];
} => {
  const upcomingBattles = createMockBattles({
    count: 20,
    variant: "upcoming",
  });
  const recentBattles = createMockBattles({
    count: 20,
    variant: "recent",
  });
  const runningBattles = createMockBattles({
    count: 20,
    variant: "running",
  });

  return {
    upcomingBattles,
    recentBattles,
    runningBattles,
  };
};
