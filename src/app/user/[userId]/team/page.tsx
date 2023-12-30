import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { UserTeamContent } from "@/features/user/team/UserTeamContent";

export const metadata: Metadata = {
  title: "Your Team",
};

export default async function UserTeamPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <UserTeamContent />
    </Suspense>
  );
}
