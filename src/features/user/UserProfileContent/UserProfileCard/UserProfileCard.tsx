"use client";

import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { useRouter, useParams } from "next/navigation";

import { UserAvatar } from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { CLIENT_PATH } from "@/constants/clientpath";
import { User } from "@/schema/User.type";

export type UserProfileCardProps = {
  user: User;
};

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
}: UserProfileCardProps) => {
  const router = useRouter();
  const { userId } = useParams<{ userId: string }>();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <UserAvatar user={user} withoutCard />
          <div className="flex flex-col gap-2">
            <CardDescription>{user.atcoderId}</CardDescription>
            <CardTitle>{user.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          {user.occupation && (
            <CardDescription>{user.occupation}</CardDescription>
          )}
          {user.organization && (
            <div className="flex gap-2">
              <CardDescription>at</CardDescription>
              <CardDescription>{user.organization}</CardDescription>
            </div>
          )}
        </div>
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
        <Button
          className="ml-auto"
          onClick={() => {
            router.push(CLIENT_PATH.USER_EDIT.replace("[userId]", userId));
          }}
        >
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserProfileCard;
