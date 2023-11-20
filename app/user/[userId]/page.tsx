import { Metadata } from "next";
import { UserProfileContent } from "@/components/screen/UserProfileContent";
import { Suspense } from "react";
import { LoadingAlert } from "@/components/common/LoadingAlert";

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
