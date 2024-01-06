import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

import { columns } from "../utils/columns";

import { Battle } from "@/schema/Battle.type";

type UseBattleListTableProps = {
  battles: Battle[];
};

export const useBattleListTable = ({ battles }: UseBattleListTableProps) => {
  const table = useReactTable({
    columns,
    data: battles,
    getCoreRowModel: getCoreRowModel<Battle>(),
  });

  return table;
};
