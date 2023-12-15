"use client";

import { Problem } from "@/schema/Problem.type";
import { useProblemSetContent } from "./hooks/useProblemSetContent";
import { ProblemSetTable } from "./ProblemSetTable";
import { SearchInput } from "../SearchInput";
import { ProblemSuggestCard } from "./ProblemSuggestCard";
import { ProblemGacha } from "./ProblemGacha";
import { useEffect } from "react";

type ProblemSetContentProps = {
  problems: Problem[];
  onChange?: (problems: Problem[]) => void;
};

export const ProblemSetContent: React.FC<ProblemSetContentProps> = ({
  problems,
  onChange,
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

  useEffect(() => {
    if (onChange) onChange(selectedProblems);
  }, [selectedProblems, onChange]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="overflow-x-scroll">
          <ProblemSetTable
            problems={selectedProblems}
            setProblems={setSelectedProblems}
          />
        </div>
        <div className="relative">
          <SearchInput
            keyword={keyword}
            onClick={openSuggestedProblemList}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Please enter at least 1 character"
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

export default ProblemSetContent;
