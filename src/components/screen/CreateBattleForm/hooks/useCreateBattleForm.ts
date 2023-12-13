"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { CLIENT_PATH } from "@/constants/clientpath";
import { Battle, BattleSchema, INITIAL_BATTLE } from "@/schema/Battle.type";
import { faker } from "@faker-js/faker";
import { User } from "@/schema/User.type";

export const useCreateBattleForm = (user: User) => {
  const form = useForm<Battle>({
    mode: "onChange",
    resolver: zodResolver(BattleSchema),
    defaultValues: { ...INITIAL_BATTLE, owner: user, createdAt: Date.now() },
  });

  const router = useRouter();
  const battleId = faker.string.uuid();
  const { toast } = useToast();

  const onSubmit = (data: Battle) => {
    const submitData = {
      ...data,
      id: battleId,
    };
    console.log(submitData);
    toast({
      title: "Success",
      description: "Battle has been created.",
    });
    router.push(CLIENT_PATH.BATTLE_DETAIL.replace("[battleId]", battleId[0]));
  };

  return {
    form,
    onSubmit,
  };
};
