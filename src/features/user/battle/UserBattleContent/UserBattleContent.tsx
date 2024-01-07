import { RocketIcon } from "lucide-react";

import { SeparatorIcon } from "@/components/common/SeparatorIcon";
import { BattleListTable } from "@/features/battle/main/BattleBoard/BattleLists/BattleListTable";
import { createMockBattles } from "@/repositories/createMockBattle";

export const UserBattleContent = async () => {
  const joinedBattles = await createMockBattles({
    count: 15,
    variant: "recent",
  });
  const createdBattles = await createMockBattles({
    count: 15,
    variant: "recent",
  });

  return (
    <div>
      <BattleListTable battles={joinedBattles} title="Joined Battles" />
      <SeparatorIcon text="Let's Battle!" icon={<RocketIcon />} />
      <BattleListTable battles={createdBattles} title="Created Battles" />
    </div>
  );
};
