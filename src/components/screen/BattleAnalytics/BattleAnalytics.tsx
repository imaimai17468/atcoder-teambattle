import { Battle } from "@/schema/Battle.type";
import { useAnalyticsValue } from "@/hooks/useAnalyticsValue";
import { Timeline } from "./components/Timeline";

import dynamic from "next/dynamic";
const ScoreChart = dynamic(() => import("./components/ScoreChart"), {
  ssr: false,
});

type BattleAnalyticsProps = {
  battle: Battle;
};

export const BattleAnalytics: React.FC<BattleAnalyticsProps> = ({
  battle,
}: BattleAnalyticsProps) => {
  const { chartData, TimeLineDataList } = useAnalyticsValue(battle);
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="w-full md:w-1/2">
        <ScoreChart chartData={chartData} />
      </div>
      <div className="h-screen w-full md:w-1/2">
        <Timeline timelineDataList={TimeLineDataList} />
      </div>
    </div>
  );
};

export default BattleAnalytics;
