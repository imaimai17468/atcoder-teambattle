import { User, UserSchema } from "@/schema/User.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useEditUserProfileForm = (user: User) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
    defaultValues: user,
  });

  const onSubmit = (data: User) => {
    console.log(data);
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
