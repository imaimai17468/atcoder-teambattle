"use client";

import { CardTitle } from "@/components/ui/card";
import { Problem } from "@/schema/Problem.type";
import { useProblemSetContent } from "../hooks/useProblemSetContent";
import { ProblemSetTable } from "./ProblemSetTable";
import { SearchInput } from "./SearchInput";
import { ProblemSuggestCard } from "./ProblemSuggestCard";

type ProblemSetContentProps = {
  problems: Problem[];
};

export const ProblemSetContent: React.FC<ProblemSetContentProps> = ({
  problems,
}: ProblemSetContentProps) => {
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
          <ProblemSuggestCard
            suggestedProblems={suggestedProblems}
            setSelectedProblems={setSelectedProblems}
          />
        )}
      </div>
    </div>
  );
};
