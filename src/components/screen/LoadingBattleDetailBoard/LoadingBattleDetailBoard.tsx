import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/common/Skeleton/Skeleton";
import { LoadingAlert } from "@/components/common/LoadingAlert";

export const LoadingBattleDetailBoard = async () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-16 w-full" />
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Participant</h2>
          <div className="flex gap-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
        <div className="sm:w-1/2">
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
      <Separator className="bg-gray-300" />
      <LoadingAlert />
    </div>
  );
};

export default LoadingBattleDetailBoard;
