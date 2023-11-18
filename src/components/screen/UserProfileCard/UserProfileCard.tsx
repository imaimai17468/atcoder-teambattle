import { User } from "@/schema/User.type";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { LoadingAlert } from "@/components/common/LoadingAlert";
import { ErrorAlert } from "@/components/common/ErrorAlert";
import { Button } from "@/components/ui/button";

export type UserProfileCardProps = {
  user: User | null;
  isLoading: boolean;
};

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  isLoading,
}: UserProfileCardProps) => {
  return (
    <Card>
      {user ? (
        <>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border">
                <AvatarImage src={user.icon} alt={user.name} />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <CardDescription>{user.AtCoderID}</CardDescription>
                <CardTitle>{user.name}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <CardDescription>
              {user.occupation && <p>{user.occupation}</p>}
              {user.organization && <p>at {user.organization}</p>}
            </CardDescription>
            {user.bio && <p className="text-sm">{user.bio}</p>}
            <div className="flex gap-4">
              {user.links.github && (
                <a
                  href={user.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon />
                </a>
              )}
              {user.links.twitter && (
                <a
                  href={user.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterLogoIcon />
                </a>
              )}
              {user.links.website && (
                <a
                  href={user.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link1Icon />
                </a>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Edit Profile</Button>
          </CardFooter>
        </>
      ) : (
        <>{isLoading ? <LoadingAlert /> : <ErrorAlert />}</>
      )}
    </Card>
  );
};

export default UserProfileCard;
