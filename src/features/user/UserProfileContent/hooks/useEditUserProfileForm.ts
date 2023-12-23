"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";
import { CLIENT_PATH } from "@/constants/clientpath";
import { User, UserSchema } from "@/schema/User.type";

export const useEditUserProfileForm = (user: User) => {
  const form = useForm<User>({
    mode: "onChange",
    resolver: zodResolver(UserSchema),
    defaultValues: user,
  });

  const router = useRouter();
  const { userId } = useParams<{ userId: string }>();
  const { toast } = useToast();

  const onSubmit = (data: User) => {
    console.log(data);
    toast({
      title: "Success",
      description: "Your profile has been updated.",
    });
    router.push(CLIENT_PATH.USER.replace("[userId]", userId));
  };

  return {
    form,
    onSubmit,
  };
};
