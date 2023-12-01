"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Problem } from "@/schema/Problem.type";
import { useMemo, useCallback, useState } from "react";
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

type ProblemSetTableProps = {
  problems: Problem[];
};

export const ProblemSetTable: React.FC<ProblemSetTableProps> = ({
  problems,
}: ProblemSetTableProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selectedProblems, setSelectedProblems] = useState<Problem[]>([]);

  const filteredProblems = useMemo(() => {
    return problems
      .filter((problem) => {
        return (
          problem.name.toLowerCase().includes(keyword.toLowerCase()) ||
          problem.link.toLowerCase().includes(keyword.toLowerCase())
        );
      })
      .filter((problem) => {
        return !selectedProblems?.some((selectedProblem) => {
          return selectedProblem.name === problem.name;
        });
      });
  }, [problems, keyword, selectedProblems]);

  const closeModal = useCallback(() => {
    setIsFocus(false);
    document.removeEventListener("click", closeModal);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <CardTitle>Battle ProblemSet</CardTitle>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6">index</TableHead>
            <TableHead>Problem</TableHead>
            <TableHead className="w-1/6 text-center">Point</TableHead>
            <TableHead className="w-1/6 text-center" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProblems.length !== 0 ? (
            selectedProblems?.map((problem, index) => {
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
                  <TableCell className="text-center">{problem.score}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      className="h-8 w-8 rounded-full border-destructive text-destructive hover:text-destructive"
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProblems((prev) => {
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
              <TableCell className="text-center" colSpan={4}>
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="relative">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-2 top-3" />
          <Input
            className="pl-8"
            onClick={(e) => {
              setIsFocus(true);
              document.addEventListener("click", closeModal);
              e.stopPropagation();
            }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {isFocus && (
          <Card
            className="absolute top-12 h-64 w-full animate-scale-up-ver-top overflow-y-scroll pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="flex flex-col gap-4">
              {filteredProblems.map((problem) => (
                <Card
                  key={problem.link}
                  className="flex cursor-pointer items-center px-4 py-2 transition-all hover:bg-gray-100"
                  onClick={() => {
                    setSelectedProblems((prev) => {
                      if (!prev) return [problem];
                      return [...prev, problem];
                    });
                    setIsFocus(false);
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <p>{problem.name}</p>
                      <p>-</p>
                      <p>{problem.score} point</p>
                    </div>
                    <CardDescription>{problem.link}</CardDescription>
                  </div>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
