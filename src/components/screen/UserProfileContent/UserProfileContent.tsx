import { createMockUser } from "../../../repositories/createMockUser";
import { UserProfileCard } from "../UserProfileCard/UserProfileCard";

export const UserProfileContent = async () => {
  const user = await createMockUser();

  return <UserProfileCard user={user} />;
};

export default UserProfileContent;
