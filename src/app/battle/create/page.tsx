import { Metadata } from "next";

import { BattleForm } from "@/features/battle/create/BattleForm";

export const metadata: Metadata = {
  title: "Create Battle",
};

export default function CreateBattlesPage() {
  return <BattleForm />;
}
