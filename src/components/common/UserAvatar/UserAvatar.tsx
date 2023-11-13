import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hovercard";
import { User } from "@/schema/User.type";

type UserAvatarProps = {
  user: User;
};

export const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <HoverCard key={user.name}>
      <HoverCardTrigger>
        <Avatar>
          <AvatarImage src={user.icon} alt={user.name} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src={user.icon} alt={user.name} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start gap-2">
            <h4 className="text-sm font-semibold">{user.name}</h4>
            <p className="text-sm">{user.bio}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserAvatar;
