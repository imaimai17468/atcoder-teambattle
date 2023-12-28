import { NextArrow } from "@/components/common/NextArrow";
import { BattleListTable } from "@/features/battle/main/BattleBoard/BattleLists/BattleListTable";
import { createMockBattles } from "@/repositories/createMockBattle";

export const UserBattleContent = async () => {
  const joinedBattle = await createMockBattles({ count: 5, variant: "recent" });
  const createdBattle = await createMockBattles({
    count: 5,
    variant: "recent",
  });

  return (
    <div>
      <BattleListTable battles={joinedBattle} title="Joined Battles" />
      <NextArrow className="my-8" />
      <BattleListTable battles={createdBattle} title="Created Battles" />
    </div>
  );
};
