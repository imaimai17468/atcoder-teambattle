import { Metadata } from "next";
import { Suspense } from "react";

import { BattleDetailBoard } from "../../../../features/battle/detail/BattleDetailBoard";

import { LoadingAlert } from "@/components/common/LoadingAlert";

export const metadata: Metadata = {
  title: "Detail Battle",
};

export default async function BattleDetailPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <BattleDetailBoard />
    </Suspense>
  );
}
