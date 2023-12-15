"use client";

import { useRouter } from "next/navigation";

import { DifficultMark } from "@/components/common/DifficultMark";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Problem } from "@/schema/Problem.type";

type ProblemListTableProps = {
  problems: Problem[];
};

export const ProblemListTable: React.FC<ProblemListTableProps> = ({
  problems,
}: ProblemListTableProps) => {
  const router = useRouter();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12">index</TableHead>
          <TableHead>Problem</TableHead>
          <TableHead className="w-1/6 text-center">Difficulty</TableHead>
          <TableHead className="w-1/6 text-center">Point</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems.map((problem, index) => {
          return (
            <TableRow
              key={problem.link}
              className="cursor-pointer hover:bg-gray-800/10"
              onClick={() => {
                router.push(problem.link);
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{problem.name}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <DifficultMark difficulty={problem.difficulty} />
                  {problem.difficulty.toFixed(1)}
                </div>
              </TableCell>
              <TableCell className="text-center">{problem.score}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
