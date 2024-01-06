"use client";

import { useRouter } from "next/navigation";

import { columns } from "./utils/columns";

import { DataTable } from "@/components/common/DataTable";
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
      <DataTable<Battle>
        data={battles}
        columns={columns}
        onRowClick={(id) => {
          router.push(CLIENT_PATH.BATTLE_DETAIL.replace("[battleId]", id));
        }}
      />
    </>
  );
};
