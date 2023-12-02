"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";
import { Problem } from "@/schema/Problem.type";
import { useProblemSetContent } from "../hooks/useProblemSetContent";
import { ProblemSetTable } from "./ProblemSetTable";
import { SearchInput } from "./SearchInput";

type ProblemSetTableProps = {
  problems: Problem[];
};

export const ProblemSetContent: React.FC<ProblemSetTableProps> = ({
  problems,
}: ProblemSetTableProps) => {
  const {
    isOpenSuggestedProblemList,
    keyword,
    setKeyword,
    selectedProblems,
    setSelectedProblems,
    suggestedProblems,
    openSuggestedProblemList,
  } = useProblemSetContent({ problems });

  return (
    <div className="flex flex-col gap-4">
      <CardTitle>Battle ProblemSet</CardTitle>
      <ProblemSetTable
        problems={selectedProblems}
        setProblems={setSelectedProblems}
      />
      <div className="relative">
        <SearchInput
          keyword={keyword}
          setKeyword={setKeyword}
          openSuggestedProblemList={openSuggestedProblemList}
        />
        {isOpenSuggestedProblemList && (
          <Card
            className="absolute top-16 h-64 w-full overflow-y-scroll pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="flex flex-col gap-4">
              {suggestedProblems.map((problem) => (
                <Card
                  key={problem.link}
                  className="flex cursor-pointer items-center px-4 py-2 transition-all hover:bg-gray-100"
                  onClick={() => {
                    setSelectedProblems((prev) => {
                      if (!prev) return [problem];
                      return [...prev, problem];
                    });
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
