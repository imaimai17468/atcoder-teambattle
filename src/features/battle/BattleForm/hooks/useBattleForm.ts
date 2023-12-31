"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ulid } from "ulidx";

import { useToast } from "@/components/ui/use-toast";
import { CLIENT_PATH } from "@/constants/clientpath";
import { Battle, BattleSchema, INITIAL_BATTLE } from "@/schema/Battle.type";
import { User } from "@/schema/User.type";

type useBattleFormProps = {
  currentUser: User;
  defaultValues?: Battle;
};

export const useBattleForm = ({
  currentUser,
  defaultValues,
}: useBattleFormProps) => {
  const form = useForm<Battle>({
    mode: "onChange",
    resolver: zodResolver(BattleSchema),
    defaultValues: defaultValues || {
      ...INITIAL_BATTLE,
      owner: currentUser,
      createdAt: Date.now(),
    },
  });

  const router = useRouter();
  const battleId = ulid();
  const { toast } = useToast();

  const onSubmit = (data: Battle) => {
    const submitData: Battle = {
      ...data,
      id: battleId,
    };
    console.log(submitData);
    toast({
      title: "Success",
      description: "Battle has been created.",
    });
    router.push(CLIENT_PATH.BATTLE_DETAIL.replace("[battleId]", battleId));
  };

  return {
    form,
    onSubmit,
  };
};
