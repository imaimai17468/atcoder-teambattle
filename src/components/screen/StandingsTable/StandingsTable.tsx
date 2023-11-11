import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ErrorAlert } from "@/components/common/ErrorAlert";
import { LoadingAlert } from "@/components/common/LoadingAlert";
import { Battle } from "@/schema/Battle.type";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avater";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hovercard";
import { useMemo } from "react";
import { User } from "@/schema/User.type";

type StandingsTableProps = {
  battle: Battle | null;
  isLoading: boolean;
};

export const StandingsTable: React.FC<StandingsTableProps> = ({
  battle,
  isLoading,
}: StandingsTableProps) => {
  const teamScoreList = useMemo(() => {
    if (!battle) return [];
    const problemLength = battle.problems.length;
    return battle.scores.map((score) => {
      const problemStatuses: ({
        user: User;
        time: number;
      } | null)[] = Array(problemLength).fill(null);
      score.userScore.forEach((userScore) => {
        userScore.problemWithCorrectness.forEach(
          (problemWithCorrectness, index) => {
            if (
              problemWithCorrectness.isCollect &&
              (!problemStatuses[index] ||
                problemStatuses[index]!.time > problemWithCorrectness.time)
            ) {
              problemStatuses[index] = {
                user: userScore.user,
                time: problemWithCorrectness.time,
              };
            }
          },
        );
      });
      const totalScore = problemStatuses.reduce((acc, cur, index) => {
        if (cur) return acc + battle.problems[index].score;
        return acc;
      }, 0);

      return { problemStatuses, totalScore };
    });
  }, [battle]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12">Rank</TableHead>
          <TableHead>Team</TableHead>
          <TableHead className="w-1/12 text-center">Score</TableHead>
          {battle?.problems.map((problem, index) => {
            return (
              <TableHead key={problem.link} className="w-1/12 text-center">
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
        {battle ? (
          battle.scores.map((score, index) => {
            return (
              <TableRow key={score.team.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="border-r">
                  <div className="flex items-center justify-between gap-8">
                    <p className="whitespace-nowrap">{score.team.name}</p>
                    <div className="flex gap-4">
                      {score.team.members.map((member) => {
                        return (
                          <HoverCard key={member.name}>
                            <HoverCardTrigger>
                              <Avatar>
                                <AvatarImage
                                  src={member.icon}
                                  alt={member.name}
                                />
                                <AvatarFallback>{member.name}</AvatarFallback>
                              </Avatar>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="flex justify-between space-x-4">
                                <Avatar>
                                  <AvatarImage
                                    src={member.icon}
                                    alt={member.name}
                                  />
                                  <AvatarFallback>{member.name}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">
                                    {member.name}
                                  </h4>
                                  <p className="text-sm">{member.bio}</p>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        );
                      })}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border-r text-center">
                  {teamScoreList[index].totalScore}
                </TableCell>
                {teamScoreList[index].problemStatuses.map(
                  (teamScore, index) => {
                    return (
                      <TableCell
                        key={index}
                        className="whitespace-nowrap text-center"
                      >
                        {teamScore ? (
                          <div className="flex flex-col items-center gap-2">
                            <Avatar>
                              <AvatarImage
                                src={teamScore.user.icon}
                                alt={teamScore.user.name}
                              />
                              <AvatarFallback>
                                {teamScore.user.name}
                              </AvatarFallback>
                            </Avatar>
                            <p>
                              {new Date(teamScore.time - battle.startDate)
                                .toISOString()
                                .substr(11, 8)}
                            </p>
                          </div>
                        ) : (
                          <p>-</p>
                        )}
                      </TableCell>
                    );
                  },
                )}
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell colSpan={2} className="text-center">
              {isLoading ? <LoadingAlert /> : <ErrorAlert />}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default StandingsTable;
