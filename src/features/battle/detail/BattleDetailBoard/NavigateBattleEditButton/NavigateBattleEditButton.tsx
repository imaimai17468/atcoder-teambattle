"use client";

import { useRouter, useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CLIENT_PATH } from "@/constants/clientpath";

export const NavigateToBattleEditButton: React.FC = () => {
  const router = useRouter();
  const { battleId } = useParams<{ battleId: string }>();

  const useNavigateToBattleEditPage = () => {
    router.push(
      CLIENT_PATH.BATTLE_EDIT.replace("[battleId]", battleId as string),
    );
  };

  return (
    <Button variant="outline" onClick={useNavigateToBattleEditPage}>
      Edit
    </Button>
  );
};
