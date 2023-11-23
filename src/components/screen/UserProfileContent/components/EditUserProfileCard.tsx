"use client";

import { User } from "@/schema/User.type";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/common/Skeleton";
import { useRouter, useParams } from "next/navigation";
import { CLIENT_PATH } from "@/constants/clientpath";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export type EditUserProfileCardProps = {
  user: User;
};

export const EditUserProfileCard: React.FC<EditUserProfileCardProps> = ({
  user,
}: EditUserProfileCardProps) => {
  const router = useRouter();
  const { userId } = useParams();
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border">
            <AvatarImage src={user.icon} alt={user.name} />
            <AvatarFallback>
              <Skeleton className="h-16 w-16 rounded-full border" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="AtCoder ID" />
            <Input type="text" placeholder="Name" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input type="text" placeholder="Occupation" className="w-64" />
          <div className="flex items-center gap-2">
            <p>at</p>
            <Input type="text" placeholder="Organization" className="w-64" />
          </div>
        </div>
        <Textarea placeholder="Bio" className="h-32" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <GitHubLogoIcon className="h-6 w-6" />
            <Input type="text" placeholder="GitHub" className="w-72" />
          </div>
          <div className="flex items-center gap-4">
            <TwitterLogoIcon className="h-6 w-6" />
            <Input type="text" placeholder="Twitter" className="w-72" />
          </div>
          <div className="flex items-center gap-4">
            <Link1Icon className="h-6 w-6" />
            <Input type="text" placeholder="Website" className="w-72" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="ml-auto"
          onClick={() => {
            toast({
              title: "Success",
              description: "Your profile has been updated.",
            });
            router.push(CLIENT_PATH.USER.replace("[userId]", userId[0]));
          }}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EditUserProfileCard;
