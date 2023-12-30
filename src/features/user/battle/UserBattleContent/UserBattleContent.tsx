import { NextArrow } from "@/components/common/NextArrow";
import { BattleListTable } from "@/features/battle/main/BattleBoard/BattleLists/BattleListTable";
import { createMockBattles } from "@/repositories/createMockBattle";

export const UserBattleContent = async () => {
  const joinedBattles = await createMockBattles({
    count: 5,
    variant: "recent",
  });
  const createdBattles = await createMockBattles({
    count: 5,
    variant: "recent",
  });

  return (
    <div>
      <BattleListTable battles={joinedBattles} title="Joined Battles" />
      <NextArrow className="my-8" />
      <BattleListTable battles={createdBattles} title="Created Battles" />
    </div>
  );
};
