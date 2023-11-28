import { LoadingAlert } from "@/components/common/LoadingAlert";
import { CreateBattleForm } from "@/components/screen/CreateBattleForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Battle",
};

export default function CreateBattlesPage() {
  return (
    <Suspense fallback={<LoadingAlert />}>
      <CreateBattleForm />
    </Suspense>
  );
}
