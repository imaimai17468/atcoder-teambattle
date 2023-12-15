import { Metadata } from "next";
import { BattleBoard } from "@/components/screen/BattleBoard";
import { Suspense } from "react";
import { LoadingBattleBoard } from "@/components/screen/LoadingBattleBoard";

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
