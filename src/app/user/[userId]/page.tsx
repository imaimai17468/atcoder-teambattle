import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { UserProfileContent } from "@/features/user/UserProfileContent";

export const metadata: Metadata = {
  title: "User",
};

export default async function UserPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <UserProfileContent />
    </Suspense>
  );
}
