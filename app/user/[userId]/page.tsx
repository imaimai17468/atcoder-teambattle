import { Metadata } from "next";
import { createMockUser } from "@/repositories/createMockUser";
import { UserProfileCard } from "@/components/screen/UserProfileCard";

export const metadata: Metadata = {
  title: "User",
};

export default async function UserPage() {
  const user = await createMockUser();
  const isLoading = !user;

  return (
    <div>
      <UserProfileCard user={user || null} isLoading={isLoading} />
    </div>
  );
}
