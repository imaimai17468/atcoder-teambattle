import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { CreateBattleContent } from "@/features/battle/create/CreateBattleContent";

export const metadata: Metadata = {
  title: "Create Battle",
};

export default function CreateBattlesPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <CreateBattleContent />
    </Suspense>
  );
}
