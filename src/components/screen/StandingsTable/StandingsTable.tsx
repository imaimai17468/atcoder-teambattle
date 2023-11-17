import {
  Table,
  TableBody,
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
import { useState } from "react";
import { useStandingsValue } from "../../../hooks/useStandingsValue";
import { FirstAcceptanceTimeRow } from "./components/FirstAcceptanceTimeRow";
import { TeamScoreRow } from "./components/TeamScoreRow";
import { UserScoreRow } from "./components/UserScoreRow";

type StandingsTableProps = {
  battle: Battle;
  startDate: number;
};

export const StandingsTable: React.FC<StandingsTableProps> = ({
  battle,
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
        {teamScoreList.map((teamScore, index) => {
          return (
            <>
              <TeamScoreRow
                teamScore={teamScore}
                index={index}
                setIsTeamScoreDetailVisible={setIsTeamScoreDetailVisible}
                startDate={startDate}
              />
              {battle.scores
                .find((s) => s.team === teamScore.team)!
                .userScore.map((userScore) => {
                  return (
                    <UserScoreRow
                      key={userScore.user.name}
                      userScore={userScore}
                      visible={isTeamScoreDetailVisible[index]}
                      startDate={startDate}
                    />
                  );
                })}
            </>
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

export default StandingsTable;
