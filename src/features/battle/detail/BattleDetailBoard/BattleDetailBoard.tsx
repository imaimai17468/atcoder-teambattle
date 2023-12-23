import dayjs from "dayjs";

import { AddToCalenderButton } from "./AddToCalenderButton";
import { BattleDetailTabs } from "./BattleDetailTabs";
import { NavigateToBattleEditButton } from "./NavigateBattleEditButton/NavigateBattleEditButton";
import { TeamJoinDialog } from "./TeamJoinDialog";
import { TwitterShareButton } from "./TwitterShareButton";

import { TimeProgress } from "@/components/common/TimeProgress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createMockBattle } from "@/repositories/createMockBattle";

export const BattleDetailBoard = async () => {
  const battle = await createMockBattle({ variant: "running" });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <h1 className="whitespace-nowrap text-2xl font-bold">{battle.title}</h1>
        <div className="sm:w-1/2">
          <h2>{battle.description}</h2>
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Participant</h2>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <p className="font-bold">
                {battle.scores ? battle.scores.length : 0}
              </p>
              <p>Teams</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">
                {battle.scores
                  ? battle.scores.reduce((acc, cur) => {
                      return acc + cur.team.members.length;
                    }, 0)
                  : 0}
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
      <div className="flex gap-4">
        <NavigateToBattleEditButton />
        <TeamJoinDialog>
          <Button variant="outline">Join</Button>
        </TeamJoinDialog>
        <TwitterShareButton
          url={`https://atcoder-team-battle.com/battle/${battle.id}`}
          text={`バーチャルコンテストに参加しよう！\nTitle: ${
            battle.title
          }\nStart: ${dayjs(battle.startDate)}%0aEnd: ${dayjs(
            battle.endDate,
          )}\n`}
        />
        <AddToCalenderButton
          title={battle.title}
          start={new Date(battle.startDate)}
          end={new Date(battle.endDate)}
          details={battle.description}
        />
      </div>
      <BattleDetailTabs battle={battle} />
    </div>
  );
};
