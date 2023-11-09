import dayjs from "dayjs";
import { Progress } from "@/components/ui/progress";
import { useMemo } from "react";

type TimeProgressProps = {
  startDate: number;
  endDate: number;
};

export const TimeProgress: React.FC<TimeProgressProps> = ({
  startDate,
  endDate,
}: TimeProgressProps) => {
  const progressPercentage = useMemo(() => {
    const value = Math.floor(
      ((new Date().getTime() - startDate) / (endDate - startDate)) * 100,
    );
    return value < 0 ? 0 : value > 100 ? 100 : value;
  }, [startDate, endDate]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-sm">
        <div className="font-thin">
          <p>{dayjs(startDate).format("YYYY MM DD")}</p>
          <p>{dayjs(startDate).format("HH:mm")}</p>
        </div>
        <div className="text-right font-thin">
          <p>{dayjs(endDate).format("YYYY MM DD")}</p>
          <p>{dayjs(endDate).format("HH:mm")}</p>
        </div>
      </div>
      <Progress value={progressPercentage} className="bg-emerald-300" />
    </div>
  );
};

export default TimeProgress;
