import { Metadata } from "next";
import { Suspense } from "react";

import { BattleBoard } from "@/features/battle/main/BattleBoard";
import { LoadingBattleBoard } from "@/features/battle/main/LoadingBattleBoard";

export const metadata: Metadata = {
  title: "Battles",
};

export default async function BattlesPage() {
  return (
    <Suspense fallback={<LoadingBattleBoard />}>
      <BattleBoard />
    </Suspense>
  );
}
