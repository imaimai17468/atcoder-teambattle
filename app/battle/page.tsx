import { Metadata } from "next";
import { BattleBoard } from "@/components/screen/BattleBoard";
import { LoadingAlert } from "@/components/common/LoadingAlert";
import { Suspense } from "react";

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
