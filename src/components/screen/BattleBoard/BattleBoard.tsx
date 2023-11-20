import { DashBoard } from "../DashBoard";
import { BattleListTable } from "../BattleListTable";
import { createMockAllTimeBattle } from "@/repositories/createMockBattle";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export const BattleBoard = async () => {
  const AllBattles = await createMockAllTimeBattle();

  return (
    <div className="flex flex-col gap-8">
      <DashBoard battles={AllBattles.runningBattles} />
      <div className="flex flex-col gap-4">
        <BattleListTable
          battles={AllBattles.runningBattles || null}
          variant="running"
        />
        <div className="my-8 flex w-full justify-center">
          <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
        </div>
        <BattleListTable
          battles={AllBattles.upcomingBattles || null}
          variant="upcoming"
        />
        <div className="my-8 flex w-full justify-center">
          <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
        </div>
        <BattleListTable
          battles={AllBattles.recentBattles || null}
          variant="recent"
        />
      </div>
    </div>
  );
};

export default BattleBoard;
