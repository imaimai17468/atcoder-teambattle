"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hovercard";
import { User } from "@/schema/User.type";
import { useRouter } from "next/navigation";
import { CLIENT_PATH } from "@/constants/clientpath";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Skeleton } from "../Skeleton";

type UserAvatarProps = {
  user: User;
  withoutCard?: boolean;
};

export const UserAvatar = ({ user, withoutCard }: UserAvatarProps) => {
  const router = useRouter();

  if (withoutCard) {
    return (
      <Avatar className="border">
        <AvatarImage src={user.icon} alt={user.name} />
        <AvatarFallback>
          <Skeleton className="h-16 w-16 rounded-full border" />
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    <HoverCard key={user.name}>
      <HoverCardTrigger>
        <Avatar className="border">
          <AvatarImage src={user.icon} alt={user.name} />
          <AvatarFallback>
            <Skeleton className="h-16 w-16 rounded-full border" />
          </AvatarFallback>{" "}
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={user.icon} alt={user.name} />
              <AvatarFallback>
                <Skeleton className="h-16 w-16 rounded-full border" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardDescription>{user.atcoderId}</CardDescription>
              <p className="text-lg font-semibold">{user.name}</p>
            </div>
          </div>
          <CardDescription>
            {user.occupation && <p>{user.occupation}</p>}
            {user.organization && <p>at {user.organization}</p>}
          </CardDescription>
          {user.bio && <p className="text-sm">{user.bio}</p>}
          <Button
            className="ml-auto w-fit"
            size="sm"
            onClick={() => {
              router.push(CLIENT_PATH.USER.replace("[userId]", user.id));
            }}
          >
            view Profile
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
