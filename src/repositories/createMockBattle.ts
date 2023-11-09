import { createMockScores } from "./createMockScore";
import { Battle } from "@/schema/Battle.type";
import { faker } from "@faker-js/faker";
import { createMockProblems } from "./createMockProblem";

export const createMockBattle = ({
  variant,
}: {
  variant?: "upcoming" | "recent" | "running";
}): Battle => {
  const id = faker.string.uuid();
  const title = faker.company.name();
  const description = faker.lorem.paragraph();
  const scores = createMockScores(faker.number.int({ min: 3, max: 10 }));
  const problems = createMockProblems(faker.number.int({ min: 5, max: 10 }));
  const createdAt = faker.date.past().getTime();

  let startDate = faker.date.past().getTime();
  let endDate = faker.date.future().getTime();

  if (variant === "upcoming") {
    endDate = faker.date.future().getTime();
    startDate = faker.date.between(new Date(), endDate).getTime();
  } else if (variant === "recent") {
    startDate = faker.date.past().getTime();
    endDate = faker.date.between(startDate, new Date()).getTime();
  }

  return {
    id,
    title,
    description,
    startDate,
    endDate,
    scores,
    problems,
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
    count: faker.number.int({ min: 3, max: 10 }),
    variant: "upcoming",
  });
  const recentBattles = createMockBattles({
    count: faker.number.int({ min: 3, max: 10 }),
    variant: "recent",
  });
  const runningBattles = createMockBattles({
    count: faker.number.int({ min: 3, max: 10 }),
    variant: "running",
  });

  return {
    upcomingBattles,
    recentBattles,
    runningBattles,
  };
};
