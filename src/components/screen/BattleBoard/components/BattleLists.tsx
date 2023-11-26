import BattleListTable from "../../BattleListTable/BattleListTable";
import { Battle } from "@/schema/Battle.type";
import { NextArrow } from "@/components/common/NextArrow";
import { CreateBattleButton } from "./CreateBattleButton";

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
      <BattleListTable
        battles={runningBattles || null}
        title="Running Battles"
      />
      <NextArrow className="my-8" />
      <BattleListTable
        battles={upcomingBattles || null}
        title="Upcoming Battles"
      />
      <NextArrow className="my-8" />
      <BattleListTable battles={recentBattles || null} title="Recent Battles" />
    </div>
  );
};
