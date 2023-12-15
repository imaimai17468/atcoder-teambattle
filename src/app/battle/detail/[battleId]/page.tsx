import { Metadata } from "next";
import { Suspense } from "react";
import { LoadingBattleDetailBoard } from "@/features/battle/detail/LoadingBattleDetailBoard";
import { BattleDetailBoard } from "../../../../features/battle/detail/BattleDetailBoard";

export const metadata: Metadata = {
  title: "Detail Battle",
};

export default async function BattleDetailPage() {
  return (
    <Suspense fallback={<LoadingBattleDetailBoard />}>
      <BattleDetailBoard />
    </Suspense>
  );
}
