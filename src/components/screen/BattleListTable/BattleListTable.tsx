import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Battle } from "@/schema/Battle.type";
import { Progress } from "@/components/ui/progress";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { ExclamationTriangleIcon, PieChartIcon } from "@radix-ui/react-icons";

type BattleListTableProps = {
  battles: Battle[] | null;
  variant: "upcoming" | "running" | "recent";
  isLoading: boolean;
};

export const BattleListTable: React.FC<BattleListTableProps> = ({
  battles,
  variant,
  isLoading,
}: BattleListTableProps) => {
  const [isSP, setIsSP] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsSP(true);
    }
  }, []);

  return (
    <>
      <h1 className="border-b border-gray-300 text-2xl font-semibold">
        {variant.charAt(0).toUpperCase() + variant.slice(1)} Battles
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            {!isSP && (
              <>
                <TableHead>Description</TableHead>
                <TableHead className="text-center">No. of Teams</TableHead>
              </>
            )}
            <TableHead className="text-center">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {battles ? (
            battles.map((battle) => {
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
                  {!isSP && (
                    <>
                      <TableCell className="w-1/3">
                        <p className="line-clamp-2">{battle.description}</p>
                      </TableCell>
                      <TableCell className="w-1/5 text-center">
                        {battle.scores.length} Teams
                      </TableCell>
                    </>
                  )}
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
            })
          ) : (
            <TableRow>
              <TableCell colSpan={isSP ? 2 : 4}>
                {isLoading ? (
                  <Alert>
                    <ExclamationTriangleIcon />
                    <AlertTitle>Loading</AlertTitle>
                    <AlertDescription>
                      <PieChartIcon className="animate-spin" />
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert variant="destructive">
                    <ExclamationTriangleIcon />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Failed to fetch data</AlertDescription>
                  </Alert>
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default BattleListTable;
