import { Battle } from "@/schema/Battle.type";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMemo, useState } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type DashBoardProps = {
  battles: Battle[];
};

export const DashBoard: React.FC<DashBoardProps> = ({
  battles,
}: DashBoardProps) => {
  const activeTeams = useMemo(() => {
    return battles.reduce((acc, battle) => {
      return acc + battle.scores.length;
    }, 0);
  }, [battles]);

  const activeUsers = useMemo(() => {
    return battles.reduce((acc, battle) => {
      return (
        acc +
        battle.scores.reduce((acc, score) => {
          return acc + score.userScore.length;
        }, 0)
      );
    }, 0);
  }, [battles]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold sm:text-2xl">DashBoard</h1>
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
          <CaretSortIcon />
        </Button>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-4 sm:grid-cols-3",
          isOpen ? "grid sm:hidden" : "hidden sm:grid",
        )}
      >
        <Card>
          <CardHeader className="text-sm">Running Battles</CardHeader>
          <CardContent className="flex justify-center gap-2 text-xl font-bold sm:justify-start">
            <p className="text-emerald-400">{battles.length}</p>
            <p> Battles</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm">Active Teams</CardHeader>
          <CardContent className="flex justify-center gap-2 text-xl font-bold sm:justify-start">
            <p className="text-emerald-400"> {activeTeams}</p>
            <p>Teams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm">Active Users</CardHeader>
          <CardContent className="flex justify-center gap-2 text-xl font-bold sm:justify-start">
            <p className="text-emerald-400"> {activeUsers}</p>
            <p>Users</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
