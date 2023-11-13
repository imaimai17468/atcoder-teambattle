import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Battle } from "@/schema/Battle.type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMemo, useState } from "react";
import { User } from "@/schema/User.type";
import clsx from "clsx";
import { calcElapsedTime } from "@/utils/calcElapsedTime";
import { UserAvatar } from "@/components/common/UserAvatar";

type StandingsTableProps = {
  battle: Battle;
  startDate: number;
};

export const StandingsTable: React.FC<StandingsTableProps> = ({
  battle,
  startDate,
}: StandingsTableProps) => {
  const { teamScoreList, firstAcceptanceTimes } = useMemo(() => {
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
                  if (problemWithCorrectness.isCollect) {
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

  const [isTeamScoreDetailVisible, setIsTeamScoreDetailVisible] = useState<
    boolean[]
  >(Array(teamScoreList.length).fill(false));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16 text-center">Rank</TableHead>
          <TableHead>Team</TableHead>
          <TableHead className="w-16 text-center">Score</TableHead>
          {battle.problems.map((problem, index) => {
            return (
              <TableHead key={problem.link} className="w-24 text-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={problem.link}>{index + 1}</a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="w-80">
                        <div className="text-sm font-bold">{problem.name}</div>
                        <div className="text-xs">{problem.score} point</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamScoreList.map((score, index) => {
          return (
            <>
              <TableRow
                key={score.team.name}
                className="cursor-pointer hover:bg-gray-800/10"
                onClick={() => {
                  setIsTeamScoreDetailVisible((prev) => {
                    const next = [...prev];
                    next[index] = !prev[index];
                    return next;
                  });
                }}
              >
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-between gap-8">
                    <p className="whitespace-nowrap">{score.team.name}</p>
                    <div className="flex gap-4">
                      {score.team.members.map((member) => {
                        return <UserAvatar key={member.name} user={member} />;
                      })}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {score.totalScore}
                </TableCell>
                {score.problemStatuses.map((teamScore, index) => {
                  return (
                    <TableCell key={index}>
                      {teamScore ? (
                        <div className="flex flex-col items-center gap-2">
                          <UserAvatar user={teamScore.user} />
                          <p>{calcElapsedTime(startDate, teamScore.time)}</p>
                        </div>
                      ) : (
                        <p>-</p>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
              {battle.scores
                .find((s) => s.team === score.team)!
                .userScore.map((userScore) => {
                  return (
                    <TableRow
                      key={userScore.user.name}
                      className={clsx(
                        "border-none",
                        !isTeamScoreDetailVisible[index]
                          ? "hidden"
                          : "table-row",
                      )}
                    >
                      <TableCell colSpan={2} />
                      <TableCell>
                        <UserAvatar user={userScore.user} />
                      </TableCell>
                      {userScore.problemWithCorrectness.map(
                        (problemWithCorrectness) => {
                          return (
                            <TableCell
                              key={problemWithCorrectness.time}
                              className="text-center"
                            >
                              {problemWithCorrectness.isCollect
                                ? calcElapsedTime(
                                    startDate,
                                    problemWithCorrectness.time,
                                  )
                                : "-"}
                            </TableCell>
                          );
                        },
                      )}
                    </TableRow>
                  );
                })}
            </>
          );
        })}
        <TableRow>
          <TableCell colSpan={3} className="text-right">
            First Acceptance Time
          </TableCell>
          {firstAcceptanceTimes.map((firstAcceptanceTime, index) => {
            return (
              <TableCell key={index} className="text-center">
                {firstAcceptanceTime ? (
                  <div className="flex flex-col items-center gap-2">
                    <UserAvatar user={firstAcceptanceTime.user} />
                    <p>
                      {calcElapsedTime(startDate, firstAcceptanceTime.time)}
                    </p>
                  </div>
                ) : (
                  <p>-</p>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StandingsTable;
