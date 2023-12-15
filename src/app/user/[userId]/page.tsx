import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingUserProfileContent } from "@/features/user/LoadingUserProfileContent";
import { UserProfileContent } from "@/features/user/UserProfileContent";

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
