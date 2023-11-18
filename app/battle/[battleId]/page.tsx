import { Metadata, NextPage } from "next";
import { createMockBattle } from "@/repositories/createMockBattle";
import { TimeProgress } from "@/components/common/TimeProgress";
import { Separator } from "@/components/ui/separator";
import { BattleDetailTabs } from "@/components/screen/BattleDetailTabs";

export const metadata: Metadata = {
  title: "Battle",
};

export const BattleDetailPage: NextPage = async () => {
  const battle = await createMockBattle({ variant: "running" });
  const isLoading = !battle;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <h1 className="whitespace-nowrap text-2xl font-bold">
          {battle?.title}
        </h1>
        <h2>{battle?.description}</h2>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-16">
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
        <div className="sm:w-1/2">
          <TimeProgress
            startDate={battle?.startDate || 0}
            endDate={battle?.endDate || 0}
          />
        </div>
      </div>
      <Separator className="bg-gray-300" />
      <BattleDetailTabs battle={battle} isLoading={isLoading} />
    </div>
  );
};

export default BattleDetailPage;
