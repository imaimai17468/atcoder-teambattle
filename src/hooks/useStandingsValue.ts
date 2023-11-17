import { useMemo } from "react";
import { Battle } from "@/schema/Battle.type";
import { User } from "@/schema/User.type";

export const useStandingsValue = (battle: Battle) => {
  return useMemo(() => {
    if (!battle) return { teamScoreList: [], firstAcceptanceTimes: [] };
    const problemLength = battle.problems.length;
    const teamScoreList = battle.scores
      .map((score) => {
        const problemStatuses: ({ user: User; time: number } | null)[] = Array(
          problemLength,
        )
          .fill(null)
          .map((_, index) => {
            return (
              score.userScore
                .map((userScore) => {
                  const problemWithCorrectness =
                    userScore.problemWithCorrectness[index];
                  if (problemWithCorrectness.isCorrect) {
                    return {
                      user: userScore.user,
                      time: problemWithCorrectness.time,
                    };
                  }
                  return null;
                })
                .filter((v) => v !== null)
                .sort((a, b) => a!.time - b!.time)[0] || null
            );
          });
        const totalScore = problemStatuses.reduce((acc, cur, index) => {
          if (cur) return acc + battle.problems[index].score;
          return acc;
        }, 0);
        const team = score.team;

        return { team, problemStatuses, totalScore };
      })
      .sort((a, b) => b.totalScore - a.totalScore);

    const firstAcceptanceTimes = Array(problemLength)
      .fill(null)
      .map((_, index) => {
        return (
          teamScoreList
            .map((teamScore) => teamScore.problemStatuses[index])
            .filter((v) => v !== null)
            .sort((a, b) => a!.time - b!.time)[0] || null
        );
      });

    return {
      teamScoreList,
      firstAcceptanceTimes,
    };
  }, [battle]);
};
