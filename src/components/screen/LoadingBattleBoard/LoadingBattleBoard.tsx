import LoadingDashBoard from "./components/LoadingDashBoard";
import { LoadingAlert } from "@/components/common/LoadingAlert";

export const LoadingBattleBoard = async () => {
  return (
    <div className="flex flex-col gap-8">
      <LoadingDashBoard />
      <div className="flex flex-col gap-4">
        <LoadingAlert />
      </div>
    </div>
  );
};

export default LoadingBattleBoard;
