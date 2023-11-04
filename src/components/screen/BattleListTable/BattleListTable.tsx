import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createMockBattles } from "@/repositories/createMockBattle";
import { Battle } from "@/schema/Battle.type";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import dayjs from "dayjs";

export const BattleListTable: React.FC = () => {
  const [battles, setBattles] = useState<Battle[]>([]);

  useEffect(() => {
    const battles = createMockBattles(5);
    setBattles(battles);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-center">No. of Teams</TableHead>
          <TableHead className="text-center">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {battles.map((battle) => {
          const progressPercentage = Math.floor(
            ((new Date().getTime() - battle.startDate) /
              (battle.endDate - battle.startDate)) *
              100,
          );

          return (
            <TableRow
              key={battle.id}
              className="cursor-pointer hover:bg-gray-200"
            >
              <TableCell className="w-1/5 font-semibold">
                {battle.title}
              </TableCell>
              <TableCell className="w-1/3">
                <p className="line-clamp-2">{battle.description}</p>
              </TableCell>
              <TableCell className="w-1/5 text-center">
                {battle.scores.length} Teams
              </TableCell>
              <TableCell className="flex flex-col gap-1">
                <div className="flex justify-between text-sm">
                  <div className="font-thin">
                    <p>{dayjs(battle.startDate).format("YYYY MM DD")}</p>
                    <p>{dayjs(battle.startDate).format("HH:mm")}</p>
                  </div>
                  <div className="text-right font-thin">
                    <p>{dayjs(battle.endDate).format("YYYY MM DD")}</p>
                    <p>{dayjs(battle.endDate).format("HH:mm")}</p>
                  </div>
                </div>
                <Progress
                  value={progressPercentage}
                  className="bg-emerald-300"
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BattleListTable;
