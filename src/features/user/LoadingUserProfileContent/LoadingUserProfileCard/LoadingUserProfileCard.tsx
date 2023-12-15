import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";

import { Skeleton } from "@/components/common/Skeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const LoadingUserProfileCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full border" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-6 w-48" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-12 w-full" />
        <div className="flex gap-4">
          <GitHubLogoIcon />
          <TwitterLogoIcon />
          <Link1Icon />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" disabled>
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoadingUserProfileCard;
