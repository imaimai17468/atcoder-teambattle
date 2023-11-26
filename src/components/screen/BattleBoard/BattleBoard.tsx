import DashBoard from "./components/DashBoard";
import { createMockAllTimeBattle } from "@/repositories/createMockBattle";
import { BattleLists } from "./components/BattleLists";

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

export default BattleBoard;
