import { DashBoard } from "../DashBoard";
import { BattleListTable } from "../BattleListTable";
import { createMockAllTimeBattle } from "@/repositories/createMockBattle";
import { NextArrow } from "@/components/common/NextArrow";

export const BattleBoard = async () => {
  const AllBattles = await createMockAllTimeBattle();

  return (
    <div className="flex flex-col gap-8">
      <DashBoard battles={AllBattles.runningBattles} />
      <div className="flex flex-col gap-4">
        <BattleListTable
          battles={AllBattles.runningBattles || null}
          title="Running Battles"
        />
        <NextArrow className="my-8" />
        <BattleListTable
          battles={AllBattles.upcomingBattles || null}
          title="Upcoming Battles"
        />
        <NextArrow className="my-8" />
        <BattleListTable
          battles={AllBattles.recentBattles || null}
          title="Recent Battles"
        />
      </div>
    </div>
  );
};

export default BattleBoard;
