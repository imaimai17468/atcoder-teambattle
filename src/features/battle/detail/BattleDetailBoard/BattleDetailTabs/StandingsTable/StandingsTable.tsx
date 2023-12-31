"use client";

import { useState, Fragment } from "react";

import { FirstAcceptanceTimeRow } from "./FirstAcceptanceTimeRow";
import { useStandingsValue } from "./hooks/useStandingsValue";
import { TeamScoreRow } from "./TeamScoreRow";
import { UserScoreRow } from "./UserScoreRow";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Battle } from "@/schema/Battle.type";
import { User } from "@/schema/User.type";

type StandingsTableProps = {
  battle: Battle;
  users: User[];
  startDate: number;
};

export const StandingsTable: React.FC<StandingsTableProps> = ({
  battle,
  users,
  startDate,
}: StandingsTableProps) => {
  const { teamScoreList, firstAcceptanceTimes } = useStandingsValue(battle);

  const [isTeamScoreDetailVisible, setIsTeamScoreDetailVisible] = useState<
    boolean[]
  >(Array(teamScoreList.length).fill(false));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16 text-center">Rank</TableHead>
          <TableHead />
          <TableHead>Name</TableHead>
          <TableHead>Member</TableHead>
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
        {teamScoreList.map((teamScore, index) => {
          return (
            <Fragment key={teamScore.team.name}>
              <TeamScoreRow
                teamScore={teamScore}
                index={index}
                setIsTeamScoreDetailVisible={setIsTeamScoreDetailVisible}
                startDate={startDate}
                users={users}
              />
              {battle.scores &&
                battle.scores
                  .find((s) => s.team === teamScore.team)!
                  .userScore.map((userScore) => {
                    return (
                      <UserScoreRow
                        key={userScore.user.id}
                        userScore={userScore}
                        visible={isTeamScoreDetailVisible[index]}
                        startDate={startDate}
                      />
                    );
                  })}
            </Fragment>
          );
        })}
        <FirstAcceptanceTimeRow
          firstAcceptanceTimes={firstAcceptanceTimes}
          startDate={startDate}
        />
      </TableBody>
    </Table>
  );
};
