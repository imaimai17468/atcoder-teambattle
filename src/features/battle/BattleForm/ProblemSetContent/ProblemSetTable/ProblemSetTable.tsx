import { useColumns } from "./utils/useColumns";

import { DataTable } from "@/components/common/DataTable";
import { Problem } from "@/schema/Problem.type";

type ProblemSetTableProps = {
  problems: Problem[];
  setProblems: React.Dispatch<React.SetStateAction<Problem[]>>;
};

export const ProblemSetTable: React.FC<ProblemSetTableProps> = ({
  problems,
  setProblems,
}: ProblemSetTableProps) => {
  const columns = useColumns({ setProblems });
  return <DataTable<Problem> data={problems} columns={columns} draggable />;
};
