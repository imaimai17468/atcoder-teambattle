import { NextPage } from "next";
import { useState, useEffect } from "react";
import { User } from "@/schema/User.type";
import { createMockUser } from "../../repositories/createMockUser";
import { UserProfileCard } from "@/components/screen/UserProfileCard";

export const UserPage: NextPage = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(createMockUser());
    setIsLoading(false);
  }, []);

  return (
    <div>
      <UserProfileCard user={user || null} isLoading={isLoading} />
    </div>
  );
};

export default UserPage;
