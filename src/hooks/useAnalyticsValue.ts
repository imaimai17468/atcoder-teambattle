import { useMemo } from "react";
import { Battle } from "@/schema/Battle.type";
import { User } from "@/schema/User.type";
import { Problem } from "@/schema/Problem.type";

export const useAnalyticsValue = (battle: Battle) => {
  return useMemo(() => {
    const ScoreTransitions = battle.scores.map((score) => {
      return score.userScore
        .flatMap((userScore) =>
          userScore.problemWithCorrectness
            .map((problem) => ({
              ...problem,
              user: userScore.user,
              teamName: score.team.name,
            }))
            .filter((problem) => problem.isCollect),
        )
        .sort((a, b) => a.time - b.time)
        .filter((v, _, arr) => {
          const onlyProblemArr = arr.map((v) => v.problem);
          return onlyProblemArr.indexOf(v.problem) === arr.indexOf(v);
        })
        .reduce(
          (acc, cur) => {
            const previousScore = acc.slice(-1)[0]?.currentScore || 0;
            return [
              ...acc,
              {
                ...cur,
                currentScore: previousScore + cur.problem.score,
              },
            ];
          },
          [] as {
            user: User;
            time: number;
            problem: Problem;
            currentScore: number;
            teamName: string;
          }[],
        );
    });

    const chartTimeLabels = [
      battle.startDate,
      ...ScoreTransitions.map((scoreTransition) =>
        scoreTransition.map((v) => v.time),
      )
        .flat()
        .sort((a, b) => a - b),
    ];

    const chartData = {
      labels: chartTimeLabels,
      datasets: ScoreTransitions.map((scoreTransition) => {
        return {
          label: scoreTransition[0].teamName,
          data: chartTimeLabels.map((time) => {
            if (time === battle.startDate) return 0;

            const previousScore = scoreTransition
              .filter((v) => v.time <= time)
              .slice(-1)[0]?.currentScore;
            return previousScore || 0;
          }),
          borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          backgroundColor: "rgba(0,0,0,0)",
        };
      }),
    };

    return {
      TimeLineDataList: ScoreTransitions.flat().sort((a, b) => a.time - b.time),
      chartData,
    };
  }, [battle]);
};
