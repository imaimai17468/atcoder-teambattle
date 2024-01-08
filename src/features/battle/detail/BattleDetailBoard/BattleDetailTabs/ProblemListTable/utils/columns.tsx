import { ColumnDef } from "@tanstack/react-table";

import { DifficultMark } from "@/components/common/DifficultMark";
import { Problem } from "@/schema/Problem.type";

export const columns: ColumnDef<Problem>[] = [
  {
    header: "index",
    cell: ({ row }) => row.index + 1,
  },
  {
    id: "name",
    header: "Problem",
    accessorKey: "name",
    cell: ({ row }) => row.original.name,
  },
  {
    id: "difficulty",
    header: "Difficulty",
    accessorKey: "difficulty",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <DifficultMark difficulty={row.original.difficulty} />
        {row.original.difficulty.toFixed(1)}
      </div>
    ),
  },
  {
    id: "score",
    header: "Point",
    accessorKey: "score",
    cell: ({ row }) => row.original.score,
  },
];
