import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { ulid } from "ulidx";

import { useToast } from "@/components/ui/use-toast";
import { createMockUsers } from "@/repositories/createMockUser";
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
    defaultValues,
  });

  const { toast } = useToast();

  const onSubmit = (data: Team) => {
    const submitData: Team = data.id ? data : { ...data, id: ulid() };

    console.log(submitData);
    toast({
      title: "Success",
      description: "Your team has been created.",
    });
  };

  const users = useMemo(() => {
    return createMockUsers(10);
  }, []);

  return {
    form,
    onSubmit,
    users,
  };
};
