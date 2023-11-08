import BattleListTable from "@/components/screen/BattleListTable/BattleListTable";
import { useState, useEffect } from "react";
import { Battle } from "@/schema/Battle.type";
import { createMockAllTimeBattle } from "@/repositories/createMockBattle";
import { DashBoard } from "@/components/screen/DashBoard";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { NextPage } from "next";

export const Home: NextPage = () => {
  const [AllBattles, setAllBattles] = useState<{
    upcoming: Battle[];
    running: Battle[];
    recent: Battle[];
  }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const { upcomingBattles, runningBattles, recentBattles } =
      createMockAllTimeBattle();
    setAllBattles({
      upcoming: upcomingBattles,
      running: runningBattles,
      recent: recentBattles,
    });
    setIsLoading(false);
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center gap-8`}>
      <div className="flex w-4/5 flex-col gap-8">
        <DashBoard
          battles={AllBattles?.running || null}
          isLoading={isLoading}
        />
        <div className="flex flex-col gap-4">
          <BattleListTable
            battles={AllBattles?.running || null}
            variant="running"
            isLoading={isLoading}
          />
          <div className="my-8 flex w-full justify-center">
            <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
          </div>
          <BattleListTable
            battles={AllBattles?.upcoming || null}
            variant="upcoming"
            isLoading={isLoading}
          />
          <div className="my-8 flex w-full justify-center">
            <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
          </div>
          <BattleListTable
            battles={AllBattles?.recent || null}
            variant="recent"
            isLoading={isLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
