import { LoadingDashBoard } from "./LoadingDashBoard";

import { LoadingAlert } from "@/components/common/LoadingAlert";

export const LoadingBattleBoard = () => {
  return (
    <div className="flex flex-col gap-8">
      <LoadingDashBoard />
      <LoadingAlert />
    </div>
  );
};
