import { NextPage } from "next";
import { createMockBattle } from "../../../repositories/createMockBattle";
import { useEffect, useState } from "react";
import { Battle } from "@/schema/Battle.type";
import { useRouter } from "next/router";
import { CLIENT_PATH } from "@/constants/clientpath";
import TimeProgress from "../../../components/common/TimeProgress/TimeProgress";
import { Separator } from "@/components/ui/separator";
import { BattleDetailTabs } from "@/components/screen/BattleDetailTabs";

export const BattleDetailPage: NextPage = () => {
  const [battle, setBattle] = useState<Battle | null>(null);
  const router = useRouter();

  useEffect(() => {
    const battle = createMockBattle({ variant: "running" });
    if (!battle) {
      router.push(CLIENT_PATH.NOT_FOUND);
    }
    setBattle(battle);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start gap-8">
        <h1 className="whitespace-nowrap text-2xl font-bold">
          {battle?.title}
        </h1>
        <h2>{battle?.description}</h2>
      </div>
      <div className="flex items-end gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Participant</h2>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <p className="font-bold">{battle?.scores.length}</p>
              <p>Teams</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">
                {battle?.scores.reduce((acc, cur) => {
                  return acc + cur.team.members.length;
                }, 0)}
              </p>
              <p>Users</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <TimeProgress
            startDate={battle?.startDate || 0}
            endDate={battle?.endDate || 0}
          />
        </div>
      </div>
      <Separator className="bg-gray-300" />
      <BattleDetailTabs battle={battle} />
    </div>
  );
};

export default BattleDetailPage;
