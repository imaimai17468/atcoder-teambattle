import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { EditBattleContent } from "@/features/battle/edit/EditBattleContent";

export const metadata: Metadata = {
  title: "Edit Battle",
};

export default function CreateBattlesPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <EditBattleContent />
    </Suspense>
  );
}
