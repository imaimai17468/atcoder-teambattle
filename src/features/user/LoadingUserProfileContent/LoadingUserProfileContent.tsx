import { LoadingAlert } from "@/components/common/LoadingAlert";
import { LoadingUserProfileCard } from "./LoadingUserProfileCard";
import { LoadingEditUserProfileCard } from "./LoadingEditUserProfileCard";

type LoadingUserProfileContentProps = {
  isEdit?: boolean;
};

export const LoadingUserProfileContent: React.FC<
  LoadingUserProfileContentProps
> = ({ isEdit = false }: LoadingUserProfileContentProps) => {
  return (
    <div className="flex flex-col gap-8">
      {isEdit ? <LoadingEditUserProfileCard /> : <LoadingUserProfileCard />}
      <LoadingAlert />
    </div>
  );
};

export default LoadingUserProfileContent;
