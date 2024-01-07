import { RocketIcon } from "lucide-react";

import { BattleListTable } from "./BattleListTable";
import { CreateBattleButton } from "../CreateBattleButton";

import { SeparatorIcon } from "@/components/common/SeparatorIcon";
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
      <SeparatorIcon text="Let's Battle!" icon={<RocketIcon />} />
      <BattleListTable battles={upcomingBattles} title="Upcoming Battles" />
      <SeparatorIcon text="Let's Battle!" icon={<RocketIcon />} />
      <BattleListTable battles={recentBattles} title="Recent Battles" />
    </div>
  );
};
