import { useState, useMemo, useCallback } from "react";
import { Problem } from "@/schema/Problem.type";

export const useProblemSetContent = ({ problems }: { problems: Problem[] }) => {
  const [isOpenSuggestedProblemList, setIsOpenSuggestedProblemList] =
    useState(false);
  const [keyword, setKeyword] = useState("");

  const [selectedProblems, setSelectedProblems] = useState<Problem[]>([]);

  const suggestedProblems = useMemo(() => {
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

  const closeSuggestedProblemList = useCallback(() => {
    setIsOpenSuggestedProblemList(false);
    document.removeEventListener("click", closeSuggestedProblemList);
  }, []);

  const openSuggestedProblemList = useCallback(() => {
    setIsOpenSuggestedProblemList(true);
    document.addEventListener("click", closeSuggestedProblemList);
  }, [closeSuggestedProblemList]);

  return {
    isOpenSuggestedProblemList,
    keyword,
    setKeyword,
    selectedProblems,
    setSelectedProblems,
    suggestedProblems,
    openSuggestedProblemList,
  };
};
