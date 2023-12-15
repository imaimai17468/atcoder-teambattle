import { Metadata } from "next";
import { UserProfileContent } from "@/components/screen/UserProfileContent";
import { Suspense } from "react";
import { LoadingUserProfileContent } from "@/components/screen/LoadingUserProfileContent";

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
