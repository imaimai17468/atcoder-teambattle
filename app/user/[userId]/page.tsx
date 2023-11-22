import { Metadata } from "next";
import { UserProfileContent } from "@/components/screen/UserProfileContent";
import { Suspense } from "react";
import { LoadingUserProfileContent } from "@/components/screen/LoadingUserProfileContent";

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
