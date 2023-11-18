import BattleListTable from "@/components/screen/BattleListTable/BattleListTable";
import { createMockAllTimeBattle } from "@/repositories/createMockBattle";
import { DashBoard } from "@/components/screen/DashBoard";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Battles",
};

export const BattlePage: NextPage = async () => {
  const AllBattles = await createMockAllTimeBattle();
  const isLoading = !AllBattles;

  return (
    <div className="flex flex-col gap-8">
      <DashBoard
        battles={AllBattles.runningBattles || null}
        isLoading={isLoading}
      />
      <div className="flex flex-col gap-4">
        <BattleListTable
          battles={AllBattles.runningBattles || null}
          variant="running"
          isLoading={isLoading}
        />
        <div className="my-8 flex w-full justify-center">
          <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
        </div>
        <BattleListTable
          battles={AllBattles.upcomingBattles || null}
          variant="upcoming"
          isLoading={isLoading}
        />
        <div className="my-8 flex w-full justify-center">
          <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
        </div>
        <BattleListTable
          battles={AllBattles.recentBattles || null}
          variant="recent"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default BattlePage;
