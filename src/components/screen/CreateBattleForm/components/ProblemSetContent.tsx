"use client";

import { Problem } from "@/schema/Problem.type";
import { useProblemSetContent } from "../hooks/useProblemSetContent";
import { ProblemSetTable } from "./ProblemSetTable";
import { SearchInput } from "./SearchInput";
import { ProblemSuggestCard } from "./ProblemSuggestCard";
import { ProblemGacha } from "./ProblemGacha";

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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <ProblemSetTable
          problems={selectedProblems}
          setProblems={setSelectedProblems}
        />
        <div className="relative">
          <SearchInput
            keyword={keyword}
            onClick={openSuggestedProblemList}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {isOpenSuggestedProblemList && (
            <ProblemSuggestCard
              suggestedProblems={suggestedProblems}
              setSelectedProblems={setSelectedProblems}
            />
          )}
        </div>
      </div>
      <ProblemGacha problems={problems} setProblems={setSelectedProblems} />
    </div>
  );
};
