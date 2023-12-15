import { BattleListTable } from "./BattleListTable";
import { CreateBattleButton } from "../CreateBattleButton";

import { NextArrow } from "@/components/common/NextArrow";
import { Battle } from "@/schema/Battle.type";

type BattleListsProps = {
  upcomingBattles: Battle[];
  runningBattles: Battle[];
  recentBattles: Battle[];
};

export const BattleLists: React.FC<BattleListsProps> = ({
  upcomingBattles,
  runningBattles,
  recentBattles,
}: BattleListsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <CreateBattleButton />
      <BattleListTable battles={runningBattles} title="Running Battles" />
      <NextArrow className="my-8" />
      <BattleListTable battles={upcomingBattles} title="Upcoming Battles" />
      <NextArrow className="my-8" />
      <BattleListTable battles={recentBattles} title="Recent Battles" />
    </div>
  );
};
