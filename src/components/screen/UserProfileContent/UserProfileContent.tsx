import { createMockBattles } from "@/repositories/createMockBattle";
import { createMockUser } from "../../../repositories/createMockUser";
import { UserProfileCard } from "../UserProfileCard/UserProfileCard";
import { BattleListTable } from "../BattleListTable";

export const UserProfileContent = async () => {
  const user = await createMockUser();
  const userBattle = await createMockBattles({ count: 5, variant: "recent" });

  return (
    <div className="flex flex-col gap-8">
      <UserProfileCard user={user} />
      <BattleListTable battles={userBattle} variant="recent" />
    </div>
  );
};

export default UserProfileContent;
