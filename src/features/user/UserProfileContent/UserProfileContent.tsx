import { EditUserProfileCard } from "./EditUserProfileCard";
import { UserProfileCard } from "./UserProfileCard";
import { createMockUser } from "../../../repositories/createMockUser";

type UserProfileContentProps = {
  isEdit?: boolean;
};

export const UserProfileContent: React.FC<UserProfileContentProps> = async ({
  isEdit,
}: UserProfileContentProps) => {
  const user = await createMockUser();

  return (
    <div className="flex flex-col gap-8">
      {isEdit ? (
        <EditUserProfileCard user={user} />
      ) : (
        <UserProfileCard user={user} />
      )}
    </div>
  );
};
