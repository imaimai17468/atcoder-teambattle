"use client";

import { User, UserSchema } from "@/schema/User.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { CLIENT_PATH } from "@/constants/clientpath";

export const useEditUserProfileForm = (user: User) => {
  const form = useForm<User>({
    mode: "onChange",
    resolver: zodResolver(UserSchema),
    defaultValues: user,
  });

  const router = useRouter();
  const { userId } = useParams();
  const { toast } = useToast();

  const onSubmit = (data: User) => {
    console.log(data);
    toast({
      title: "Success",
      description: "Your profile has been updated.",
    });
    router.push(CLIENT_PATH.USER.replace("[userId]", userId[0]));
  };

  return {
    form,
    onSubmit,
  };
};
