import { Battle } from "@/schema/Battle.type";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMemo } from "react";

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

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-4 shadow-md">
      <h1 className="text-2xl font-semibold">DashBoard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="text-sm">Running Battles</CardHeader>
          <CardContent className="text-xl font-bold">
            {battles.length} Battles
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm">Active Teams</CardHeader>
          <CardContent className="text-xl font-bold">
            {activeTeams} Teams
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader className="text-sm">Active Users</CardHeader>
          <CardContent className="text-xl font-bold">
            {activeUsers} Users
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
