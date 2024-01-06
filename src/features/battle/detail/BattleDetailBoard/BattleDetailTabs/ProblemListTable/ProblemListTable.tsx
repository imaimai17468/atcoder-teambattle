"use client";

import { useRouter } from "next/navigation";

import { columns } from "./utils/columns";

import { DataTable } from "@/components/common/DataTable";
import { Problem } from "@/schema/Problem.type";

type ProblemListTableProps = {
  problems: Problem[];
};

export const ProblemListTable: React.FC<ProblemListTableProps> = ({
  problems,
}: ProblemListTableProps) => {
  const router = useRouter();
  return (
    <DataTable<Problem>
      data={problems}
      columns={columns}
      onRowClick={(problem) => {
        router.push(problem.link);
      }}
    />
  );
};
