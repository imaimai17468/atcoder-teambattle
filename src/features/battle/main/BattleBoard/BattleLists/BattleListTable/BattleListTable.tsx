"use client";

import { useRouter } from "next/navigation";

import { TimeProgress } from "@/components/common/TimeProgress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CLIENT_PATH } from "@/constants/clientpath";
import { Battle } from "@/schema/Battle.type";

type BattleListTableProps = {
  battles: Battle[];
  title: string;
};

export const BattleListTable: React.FC<BattleListTableProps> = ({
  battles,
  title,
}: BattleListTableProps) => {
  const router = useRouter();

  return (
    <>
      <h1 className="border-b border-gray-300 text-2xl font-semibold">
        {title}
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="hidden text-center md:table-cell">
              No. of Teams
            </TableHead>
            <TableHead className="text-center">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {battles.map((battle) => {
            return (
              <TableRow
                key={battle.id}
                className="cursor-pointer hover:bg-gray-800/10"
                onClick={() => {
                  router.push(
                    CLIENT_PATH.BATTLE_DETAIL.replace("[battleId]", battle.id),
                  );
                }}
              >
                <TableCell className="w-1/3 font-semibold md:w-1/5">
                  {battle.title}
                </TableCell>
                <TableCell className="hidden w-1/3 md:table-cell">
                  <p className="line-clamp-2">{battle.description}</p>
                </TableCell>
                <TableCell className="hidden w-1/5 text-center md:table-cell">
                  {battle.scores ? battle.scores.length : 0} Teams
                </TableCell>
                <TableCell>
                  <TimeProgress
                    startDate={battle.startDate}
                    endDate={battle.endDate}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
