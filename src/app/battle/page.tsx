import { Metadata } from "next";
import { BattleBoard } from "@/features/battle/main/BattleBoard";
import { Suspense } from "react";
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
