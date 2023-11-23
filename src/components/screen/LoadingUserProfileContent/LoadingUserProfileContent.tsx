import { LoadingAlert } from "@/components/common/LoadingAlert";
import LoadingUserProfileCard from "./components/LoadingUserProfileCard";

export const LoadingUserProfileContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <LoadingUserProfileCard />
      <LoadingAlert />
    </div>
  );
};

export default LoadingUserProfileContent;
