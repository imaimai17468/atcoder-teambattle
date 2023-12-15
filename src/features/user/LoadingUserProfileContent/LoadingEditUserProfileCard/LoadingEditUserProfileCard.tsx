import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/common/Skeleton";

export const LoadingEditUserProfileCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full border" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-48" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Skeleton className="h-10 w-64" />
          <div className="flex items-center gap-2">
            <p>at</p>
            <Skeleton className="h-10 w-64" />
          </div>
        </div>
        <Skeleton className="h-32 w-full" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <GitHubLogoIcon className="h-6 w-6" />
            <Skeleton className="h-10 w-72" />
          </div>
          <div className="flex items-center gap-4">
            <TwitterLogoIcon className="h-6 w-6" />
            <Skeleton className="h-10 w-72" />
          </div>
          <div className="flex items-center gap-4">
            <Link1Icon className="h-6 w-6" />
            <Skeleton className="h-10 w-72" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" disabled>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoadingEditUserProfileCard;
