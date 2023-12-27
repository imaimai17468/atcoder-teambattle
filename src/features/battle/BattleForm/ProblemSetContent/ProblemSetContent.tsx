"use client";

import { useEffect } from "react";

import { useProblemSetContent } from "./hooks/useProblemSetContent";
import { ProblemGacha } from "./ProblemGacha";
import { ProblemSetTable } from "./ProblemSetTable";
import { ProblemSuggestCard } from "./ProblemSuggestCard";

import { SearchInput } from "@/components/common/SearchInput";
import { Problem } from "@/schema/Problem.type";

type ProblemSetContentProps = {
  problems: Problem[];
  onChange?: (problems: Problem[]) => void;
  value: Problem[];
};

export const ProblemSetContent: React.FC<ProblemSetContentProps> = ({
  problems,
  onChange,
  value,
}: ProblemSetContentProps) => {
  const {
    isOpenSuggestedProblemList,
    setIsOpenSuggestedProblemList,
    keyword,
    setKeyword,
    selectedProblems,
    setSelectedProblems,
    suggestedProblems,
    ref,
  } = useProblemSetContent({ problems, value });

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
            onClick={() => setIsOpenSuggestedProblemList(true)}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search problems"
          />
          {isOpenSuggestedProblemList && (
            <div ref={ref}>
              <ProblemSuggestCard
                suggestedProblems={suggestedProblems}
                setSelectedProblems={setSelectedProblems}
              />
            </div>
          )}
        </div>
      </div>
      <ProblemGacha problems={problems} setProblems={setSelectedProblems} />
    </div>
  );
};
