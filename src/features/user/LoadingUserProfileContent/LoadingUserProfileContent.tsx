import { LoadingEditUserProfileCard } from "./LoadingEditUserProfileCard";
import { LoadingUserProfileCard } from "./LoadingUserProfileCard";

type LoadingUserProfileContentProps = {
  isEdit?: boolean;
};

export const LoadingUserProfileContent: React.FC<
  LoadingUserProfileContentProps
> = ({ isEdit = false }: LoadingUserProfileContentProps) => {
  return isEdit ? <LoadingEditUserProfileCard /> : <LoadingUserProfileCard />;
};
