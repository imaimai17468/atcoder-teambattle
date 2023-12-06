"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { CLIENT_PATH } from "@/constants/clientpath";
import { Battle, BattleSchema } from "@/schema/Battle.type";
import { faker } from "@faker-js/faker";

export const useCreateBattleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<Battle>({
    mode: "onChange",
    resolver: zodResolver(BattleSchema),
  });

  const router = useRouter();
  const battleId = faker.string.uuid();
  const { toast } = useToast();

  const onSubmit = (data: Battle) => {
    console.log(data);
    toast({
      title: "Success",
      description: "Battle has been created.",
    });
    router.push(CLIENT_PATH.BATTLE_DETAIL.replace("[battleId]", battleId[0]));
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    control,
    watch,
    errors,
    isValid,
    isDirty,
    isSubmitting,
  };
};
