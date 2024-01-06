import { createColumnHelper } from "@tanstack/react-table";

import { TimeProgress } from "@/components/common/TimeProgress";
import { Battle } from "@/schema/Battle.type";

const columnHelper = createColumnHelper<Battle>();

export const columns = [
  columnHelper.display({
    id: "title",
    header: "Title",
    cell: ({ row }) => row.original.title,
  }),
  columnHelper.display({
    id: "description",
    header: "Description",
    cell: ({ row }) => <div className="w-96">{row.original.description}</div>,
  }),
  columnHelper.display({
    id: "teams",
    header: "No of Teams",
    cell: ({ row }) => (
      <div>{row.original.scores ? row.original.scores.length : 0}</div>
    ),
  }),
  columnHelper.display({
    id: "time",
    header: "Duration",
    cell: ({ row }) => (
      <div className="w-64">
        <TimeProgress
          startDate={row.original.startDate}
          endDate={row.original.endDate}
        />
      </div>
    ),
  }),
];
