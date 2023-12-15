import { Metadata } from "next";
import { UserProfileContent } from "@/features/user/UserProfileContent";
import { Suspense } from "react";
import { LoadingUserProfileContent } from "@/features/user/LoadingUserProfileContent";

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
