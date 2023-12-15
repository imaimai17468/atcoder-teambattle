import { Metadata } from "next";

import { CreateBattleForm } from "@/features/battle/create/CreateBattleForm";

export const metadata: Metadata = {
  title: "Create Battle",
};

export default function CreateBattlesPage() {
  return <CreateBattleForm />;
}
