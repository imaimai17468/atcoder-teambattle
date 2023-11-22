import { sleep } from "@/utils/sleep";
import { createMockUser } from "../../../repositories/createMockUser";
import { UserProfileCard } from "../UserProfileCard/UserProfileCard";

export const UserProfileContent = async () => {
  const user = await createMockUser();
  await sleep(1000);
  return <UserProfileCard user={user} />;
};

export default UserProfileContent;
