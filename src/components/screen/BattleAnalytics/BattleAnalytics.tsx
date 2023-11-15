import { Battle } from "@/schema/Battle.type";
import { useAnalyticsValue } from "@/hooks/useAnalyticsValue";

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
  const { chartData } = useAnalyticsValue(battle);
  return (
    <div className="flex gap-8">
      <div className="w-2/3">
        <ScoreChart chartData={chartData} />
      </div>
      <div>TimeLine</div>
    </div>
  );
};

export default BattleAnalytics;
