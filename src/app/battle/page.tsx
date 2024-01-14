import { Metadata } from "next";
import { Suspense } from "react";

import { LoadingAlert } from "@/components/common/LoadingAlert";
import { BattleBoard } from "@/features/battle/main/BattleBoard";

export const metadata: Metadata = {
  title: "Battles",
};

export default async function BattlesPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <BattleBoard />
    </Suspense>
  );
}
