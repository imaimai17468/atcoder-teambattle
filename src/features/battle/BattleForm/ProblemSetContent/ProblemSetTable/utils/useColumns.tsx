import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

import { DeleteButton } from "@/components/common/DeleteButton";
import { DifficultMark } from "@/components/common/DifficultMark";
import { Problem } from "@/schema/Problem.type";

export const useColumns = ({
  setProblems,
}: {
  setProblems: React.Dispatch<React.SetStateAction<Problem[]>>;
}) => {
  const columns: ColumnDef<Problem>[] = useMemo(
    () => [
      {
        id: "index",
        header: "index",
        cell: ({ row }) => row.index + 1,
      },
      {
        id: "name",
        header: "Problem",
        cell: ({ row }) => row.original.name,
      },
      {
        id: "difficulty",
        header: "Difficulty",
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
        cell: ({ row }) => row.original.score,
      },
      {
        id: "delete",
        cell: ({ row }) => (
          <DeleteButton
            onClick={() => {
              setProblems((prev) =>
                prev.filter((problem) => problem.link !== row.original.link),
              );
            }}
          />
        ),
      },
    ],
    [setProblems],
  );

  return columns;
};
