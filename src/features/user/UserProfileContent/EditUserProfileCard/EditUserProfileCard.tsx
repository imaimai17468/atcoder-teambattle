"use client";

import { User } from "@/schema/User.type";
import { Card } from "@/components/ui/card";
import { EditUserProfileForm } from "../EditUserProfileForm";

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
