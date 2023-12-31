"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CLIENT_PATH } from "@/constants/clientpath";

export const CreateBattleButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => {
        router.push(CLIENT_PATH.BATTLE_CREATE);
      }}
      className="ml-auto w-fit"
    >
      Create Battle
    </Button>
  );
};
