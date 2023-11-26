import { Metadata } from "next";
import { BattleDetailBoard } from "@/components/screen/BattleDetailBoard";
import { Suspense } from "react";
import { LoadingBattleDetailBoard } from "@/components/screen/LoadingBattleDetailBoard";

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
