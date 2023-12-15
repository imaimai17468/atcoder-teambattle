"use client";

import { EditUserProfileForm } from "../EditUserProfileForm";

import { Card } from "@/components/ui/card";
import { User } from "@/schema/User.type";

export type EditUserProfileCardProps = {
  user: User;
};

export const EditUserProfileCard: React.FC<EditUserProfileCardProps> = ({
  user,
}: EditUserProfileCardProps) => {
  return (
    <Card>
      <EditUserProfileForm user={user} />
    </Card>
  );
};

export default EditUserProfileCard;
