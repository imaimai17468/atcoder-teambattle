import { Battle } from "@/schema/Battle.type";
import { ScoreChart } from "./components/ScoreChart";
import { useAnalyticsValue } from "@/hooks/useAnalyticsValue";

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
