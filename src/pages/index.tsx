import { Noto_Sans_JP } from "next/font/google";
import BattleListTable from "@/components/screen/BattleListTable/BattleListTable";
import { useState, useEffect } from "react";
import { Battle } from "@/schema/Battle.type";
import { createMockBattles } from "@/repositories/createMockBattle";
import { DashBoard } from "@/components/screen/DashBoard";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function Home() {
  const [battles, setBattles] = useState<Battle[]>([]);

  useEffect(() => {
    const battles = createMockBattles(5);
    setBattles(battles);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 ${notoSansJP.className}`}
    >
      <div className="flex w-4/5 flex-col gap-8">
        <DashBoard battles={battles} />
        <div className="flex flex-col gap-4">
          <h1 className="border-b border-gray-300 text-2xl font-semibold">
            Battles
          </h1>
          <BattleListTable battles={battles} />
        </div>
      </div>
    </main>
  );
}
