import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { DifficultMark } from "@/components/common/DifficultMark";
import { Button } from "@/components/ui/button";
import { Problem } from "@/schema/Problem.type";
import { useToast } from "@/components/ui/use-toast";
import { DoubleArrowDownIcon, TrashIcon } from "@radix-ui/react-icons";

const difficultyLevels = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

const difficultyRanges = [
  {
    label: "easy",
    ranges: [
      { min: 0, max: 50 },
      { min: 10, max: 100 },
      { min: 50, max: 800 },
      { min: 800, max: 1200 },
      { min: 1200, max: 1600 },
      { min: 2000, max: 2400 },
    ],
  },
  {
    label: "medium",
    ranges: [
      { min: 0, max: 100 },
      { min: 50, max: 400 },
      { min: 400, max: 1600 },
      { min: 1600, max: 2200 },
      { min: 2200, max: 2800 },
      { min: 2800, max: 4000 },
    ],
  },
  {
    label: "hard",
    ranges: [
      { min: 400, max: 1200 },
      { min: 1200, max: 2400 },
      { min: 1600, max: 3200 },
      { min: 2400, max: 9999 },
      { min: 2800, max: 9999 },
      { min: 2800, max: 9999 },
    ],
  },
];

type Range = {
  min: number;
  max: number;
};

type ProblemGachaProps = {
  problems: Problem[];
  setProblems: React.Dispatch<React.SetStateAction<Problem[]>>;
};

export const ProblemGacha: React.FC<ProblemGachaProps> = ({
  problems,
  setProblems,
}: ProblemGachaProps) => {
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [currentRanges, setCurrentRanges] = useState<Range[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    difficultyRanges
      ?.filter(({ label }) => label === difficulty)
      .map(({ ranges }) => setCurrentRanges(ranges));
  }, [difficulty]);

  const onSubmit = () => {
    const rangeLength = currentRanges.length;
    const newProblems = new Set<Problem>();

    currentRanges.forEach((range) => {
      const filteredProblems = problems.filter(
        (problem) =>
          range.min <= problem.difficulty && problem.difficulty <= range.max,
      );
      if (filteredProblems.length !== 0) {
        const randomIndex = Math.floor(Math.random() * filteredProblems.length);
        newProblems.add(filteredProblems[randomIndex]);
      }
    });

    setProblems((prev) => {
      const prevSet = new Set(prev);
      prevSet.forEach((problem) => newProblems.add(problem));
      return Array.from(newProblems);
    });

    if (rangeLength !== newProblems.size) {
      toast({
        title: "Problem not found",
        description:
          "Due to lack of problems, I could not create problems in all Ranges!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <CardTitle>Randomly add multiple Problems</CardTitle>
      <div className="flex flex-col gap-2">
        <p>Difficulty Adjustment Preset</p>
        <div className="w-48">
          <Select
            value={difficulty}
            onValueChange={(value) => setDifficulty(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Difficulty Level" />
            </SelectTrigger>
            <SelectContent>
              {difficultyLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex w-fit flex-col gap-4">
        {currentRanges.map((range, index) => (
          <div key={index} className="flex items-center gap-4">
            <DifficultMark difficulty={range.min} />
            <Input
              type="number"
              placeholder="Min Diff"
              value={range.min}
              className="w-48"
              onChange={(e) => {
                const newRanges = [...currentRanges];
                const updatedRange = {
                  ...newRanges[index],
                  min: parseInt(e.target.value),
                };
                newRanges[index] = updatedRange;
                setCurrentRanges(newRanges);
              }}
              min={0}
              max={9999}
            />
            <ArrowRightIcon />
            <DifficultMark difficulty={range.max} />
            <Input
              type="number"
              placeholder="Max Diff"
              value={range.max}
              className="w-48"
              onChange={(e) => {
                const newRanges = [...currentRanges];
                const updatedRange = {
                  ...newRanges[index],
                  max: parseInt(e.target.value),
                };
                newRanges[index] = updatedRange;
                setCurrentRanges(newRanges);
              }}
              min={0}
              max={9999}
            />
            <Button
              type="button"
              className="h-8 w-8 rounded-full border-destructive text-destructive hover:text-destructive"
              variant="outline"
              size="icon"
              onClick={() => {
                const newRanges = currentRanges.filter(
                  (_, currentIndex) => currentIndex !== index,
                );
                setCurrentRanges(newRanges);
              }}
            >
              <TrashIcon />
            </Button>
          </div>
        ))}
        <div className="flex justify-around">
          <Button
            type="button"
            className="flex w-48 items-center gap-2"
            variant="outline"
            onClick={() => {
              const newRanges = [...currentRanges, { min: 0, max: 0 }];
              setCurrentRanges(newRanges);
            }}
          >
            <DoubleArrowDownIcon />
            more Range
          </Button>
          <Button type="button" className="w-48" onClick={onSubmit}>
            Randomly add
          </Button>
        </div>
      </div>
    </div>
  );
};
