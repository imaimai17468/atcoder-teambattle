import { Metadata } from "next";
import { UserProfileContent } from "@/features/user/UserProfileContent";
import { Suspense } from "react";
import { LoadingUserProfileContent } from "@/features/user/LoadingUserProfileContent";

export const metadata: Metadata = {
  title: "User",
};

export default async function UserPage() {
  return (
    <Suspense fallback={<LoadingUserProfileContent />}>
      <UserProfileContent />
    </Suspense>
  );
}
