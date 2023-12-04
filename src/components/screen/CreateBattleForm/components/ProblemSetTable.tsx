import { Problem } from "@/schema/Problem.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DifficultMark } from "@/components/common/DifficultMark";

type ProblemSetTableProps = {
  problems: Problem[];
  setProblems: React.Dispatch<React.SetStateAction<Problem[]>>;
};

export const ProblemSetTable: React.FC<ProblemSetTableProps> = ({
  problems,
  setProblems,
}: ProblemSetTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/6">index</TableHead>
          <TableHead>Problem</TableHead>
          <TableHead className="w-1/6 text-center">Difficulty</TableHead>
          <TableHead className="w-1/6 text-center">Point</TableHead>
          <TableHead className="w-1/6 text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems.length !== 0 ? (
          problems?.map((problem, index) => {
            return (
              <TableRow
                key={problem.name}
                className="cursor-pointer hover:bg-gray-800/10"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {problem.name}
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link1Icon />
                    </a>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-4">
                    <DifficultMark difficulty={problem.difficulty} />
                    <p>{problem.difficulty.toFixed(1)}</p>
                  </div>
                </TableCell>
                <TableCell className="text-center">{problem.score}</TableCell>
                <TableCell className="text-center">
                  <Button
                    className="h-8 w-8 rounded-full border-destructive text-destructive hover:text-destructive"
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setProblems((prev) => {
                        if (!prev) return [];
                        return prev.filter(
                          (selectedProblem) =>
                            selectedProblem.name !== problem.name,
                        );
                      });
                    }}
                  >
                    <TrashIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell className="text-center" colSpan={5}>
              No Data
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
