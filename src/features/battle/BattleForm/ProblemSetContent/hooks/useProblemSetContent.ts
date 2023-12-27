import { useState, useMemo, useRef } from "react";
import { useClickAway } from "react-use";

import { Problem } from "@/schema/Problem.type";

type UseProblemSetContentProps = {
  problems: Problem[];
  value: Problem[];
};

export const useProblemSetContent = ({
  problems,
  value,
}: UseProblemSetContentProps) => {
  const [isOpenSuggestedProblemList, setIsOpenSuggestedProblemList] =
    useState(false);
  const [keyword, setKeyword] = useState("");

  const [selectedProblems, setSelectedProblems] = useState<Problem[]>(value);

  const suggestedProblems = useMemo(() => {
    return problems
      .filter((problem) => {
        return (
          problem.name.toLowerCase().includes(keyword.toLowerCase()) ||
          problem.link.toLowerCase().includes(keyword.toLowerCase())
        );
      })
      .filter((problem) => {
        return !selectedProblems.some((selectedProblem) => {
          return problem.name === selectedProblem.name;
        });
      });
  }, [problems, keyword, selectedProblems]);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpenSuggestedProblemList(false);
  });

  return {
    isOpenSuggestedProblemList,
    keyword,
    setKeyword,
    selectedProblems,
    setSelectedProblems,
    suggestedProblems,
    ref,
    setIsOpenSuggestedProblemList,
  };
};
