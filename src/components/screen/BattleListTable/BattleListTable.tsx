"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Battle } from "@/schema/Battle.type";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CLIENT_PATH } from "@/constants/clientpath";
import { TimeProgress } from "@/components/common/TimeProgress";

type BattleListTableProps = {
  battles: Battle[];
  variant: "upcoming" | "running" | "recent";
};

export const BattleListTable: React.FC<BattleListTableProps> = ({
  battles,
  variant,
}: BattleListTableProps) => {
  const router = useRouter();
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

export default BattleListTable;
