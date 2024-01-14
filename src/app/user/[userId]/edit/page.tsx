import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { UserProfileContent } from "@/features/user/UserProfileContent";

export const metadata: Metadata = {
  title: "Edit User",
};

export default async function EditUserPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <UserProfileContent isEdit />
    </Suspense>
  );
}
