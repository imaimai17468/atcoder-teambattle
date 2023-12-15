import { createMockBattles } from "@/repositories/createMockBattle";
import { createMockUser } from "../../../repositories/createMockUser";
import { UserProfileCard } from "./UserProfileCard";
import { BattleListTable } from "@/features/battle/main/BattleBoard/BattleLists/BattleListTable";
import { NextArrow } from "@/components/common/NextArrow";
import { EditUserProfileCard } from "./EditUserProfileCard";

type UserProfileContentProps = {
  isEdit?: boolean;
};

export const UserProfileContent: React.FC<UserProfileContentProps> = async ({
  isEdit,
}: UserProfileContentProps) => {
  const user = await createMockUser();
  const joinedBattle = await createMockBattles({ count: 5, variant: "recent" });
  const createdBattle = await createMockBattles({
    count: 5,
    variant: "recent",
  });

  return (
    <div className="flex flex-col gap-8">
      {isEdit ? (
        <EditUserProfileCard user={user} />
      ) : (
        <UserProfileCard user={user} />
      )}
      <BattleListTable battles={joinedBattle} title="Joined Battles" />
      <NextArrow className="my-8" />
      <BattleListTable battles={createdBattle} title="Created Battles" />
    </div>
  );
};
