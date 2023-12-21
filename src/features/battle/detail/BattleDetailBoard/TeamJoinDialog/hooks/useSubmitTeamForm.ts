import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";
import { TeamSchema, Team } from "@/schema/Team.type";

export const useSubmitTeamForm = () => {
  const form = useForm<Team>({
    mode: "onChange",
    resolver: zodResolver(TeamSchema),
  });

  const { toast } = useToast();

  const onSubmit = (data: Team) => {
    console.log(data);
    toast({
      title: "Success",
      description: "Your team has been created.",
    });
  };

  return {
    form,
    onSubmit,
  };
};
