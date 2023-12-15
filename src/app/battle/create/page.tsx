import { CreateBattleForm } from "@/features/battle/create/CreateBattleForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Battle",
};

export default function CreateBattlesPage() {
  return <CreateBattleForm />;
}
