import { VList } from "virtua";

import { DifficultMark } from "@/components/common/DifficultMark";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Problem } from "@/schema/Problem.type";

type ProblemSuggestCardProps = {
  suggestedProblems: Problem[];
  setSelectedProblems: React.Dispatch<React.SetStateAction<Problem[]>>;
};

export const ProblemSuggestCard: React.FC<ProblemSuggestCardProps> = ({
  suggestedProblems,
  setSelectedProblems,
}: ProblemSuggestCardProps) => {
  return (
    <Card
      className="absolute top-16 z-10 w-full pt-4"
      onClick={(e) => e.stopPropagation()}
    >
      <CardContent>
        <VList style={{ height: "256px" }}>
          {suggestedProblems.map((problem) => (
            <Card
              key={problem.link}
              className="mb-4 flex cursor-pointer items-center px-4 py-2 transition-all hover:bg-gray-100"
              onClick={() => {
                setSelectedProblems((prev) => {
                  if (!prev) return [problem];
                  if (prev.includes(problem)) return prev;
                  return [...prev, problem];
                });
              }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p>{problem.name}</p>
                  <p>-</p>
                  <p>{problem.score} point</p>
                </div>
                <div className="flex items-center gap-2">
                  <CardDescription>Difficulty</CardDescription>
                  <CardDescription>
                    {problem.difficulty.toFixed(1)}
                  </CardDescription>
                  <DifficultMark difficulty={problem.difficulty} />
                </div>
                <CardDescription>{problem.link}</CardDescription>
              </div>
            </Card>
          ))}
        </VList>
      </CardContent>
    </Card>
  );
};
