import { NextPage } from "next";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { User } from "@/schema/User.type";
import { createMockUser } from "../../repositories/createMockUser";
import { UserAvatar } from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";

export const UserPage: NextPage = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    setUser(createMockUser());
  }, []);

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <UserAvatar user={user} />
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
              <a href={user.links.github} target="_blank" rel="noreferrer">
                <GitHubLogoIcon />
              </a>
            )}
            {user.links.twitter && (
              <a href={user.links.twitter} target="_blank" rel="noreferrer">
                <TwitterLogoIcon />
              </a>
            )}
            {user.links.website && (
              <a href={user.links.website} target="_blank" rel="noreferrer">
                <Link1Icon />
              </a>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Edit Profile</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserPage;
