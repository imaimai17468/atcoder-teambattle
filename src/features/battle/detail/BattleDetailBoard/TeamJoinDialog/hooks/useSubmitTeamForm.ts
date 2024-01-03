import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ulid } from "ulidx";

import { useToast } from "@/components/ui/use-toast";
import { TeamSchema, Team } from "@/schema/Team.type";

type UseSubmitTeamFormProps = {
  defaultValues?: Team;
};

export const useSubmitTeamForm = ({
  defaultValues,
}: UseSubmitTeamFormProps) => {
  const form = useForm<Team>({
    mode: "onChange",
    resolver: zodResolver(TeamSchema),
    defaultValues: defaultValues || { id: ulid() },
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = (data: Team) => {
    const submitData: Team = data.id ? data : { ...data, id: ulid() };

    console.log(submitData);
    toast({
      title: "Success",
      description: "Your team has been created.",
    });

    router.refresh();
  };

  return {
    form,
    onSubmit,
  };
};
