import { Metadata } from "next";
import { BattleDetailBoard } from "@/components/screen/BattleDetailBoard";
import { Suspense } from "react";
import { LoadingAlert } from "@/components/common/LoadingAlert";

export const metadata: Metadata = {
  title: "Battle",
};

export default async function BattleDetailPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <BattleDetailBoard />
    </Suspense>
  );
}
