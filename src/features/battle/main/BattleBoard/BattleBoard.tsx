import { BattleLists } from "./BattleLists";
import { DashBoard } from "./DashBoard";

import { createMockAllTimeBattle } from "@/repositories/createMockBattle";

export const BattleBoard = async () => {
  const AllBattles = await createMockAllTimeBattle();

  return (
    <div className="flex flex-col gap-8">
      <DashBoard battles={AllBattles.runningBattles} />
      <BattleLists
        upcomingBattles={AllBattles.upcomingBattles}
        runningBattles={AllBattles.runningBattles}
        recentBattles={AllBattles.recentBattles}
      />
    </div>
  );
};
