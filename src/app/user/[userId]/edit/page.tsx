import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingUserProfileContent } from "@/features/user/LoadingUserProfileContent";
import { UserProfileContent } from "@/features/user/UserProfileContent";

export const metadata: Metadata = {
  title: "Edit User",
};

export default async function EditUserPage() {
  return (
    <Suspense fallback={<LoadingUserProfileContent isEdit />}>
      <UserProfileContent isEdit />
    </Suspense>
  );
}
