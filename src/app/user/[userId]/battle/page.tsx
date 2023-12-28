import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { UserBattleContent } from "@/features/user/battle/UserBattleContent";

export const metadata: Metadata = {
  title: "Your Battle",
};

export default async function UserBattlePage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <UserBattleContent />
    </Suspense>
  );
}
