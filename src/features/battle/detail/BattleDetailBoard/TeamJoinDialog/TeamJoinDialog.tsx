"use client";

import { useRouter } from "next/navigation";

import { useSubmitTeamForm } from "./hooks/useSubmitTeamForm";
import { SelectMembers } from "./SelectMembers";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Team } from "@/schema/Team.type";

type TeamJoinDialogProps = {
  defaultValues?: Team;
  children: React.ReactNode;
};

export const TeamJoinDialog: React.FC<TeamJoinDialogProps> = ({
  defaultValues,
  children,
}: TeamJoinDialogProps) => {
  const { onSubmit, form, users } = useSubmitTeamForm({ defaultValues });
  const { isDirty, isSubmitting, isValid } = form.formState;
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>Participate as a Team</DialogTitle>
          <DialogDescription>
            You can join this battle as a team. Please fill the form below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Team Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="members"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Member</FormLabel>
                  <FormControl>
                    <SelectMembers users={users} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose>
                <Button
                  type="submit"
                  disabled={!isDirty || !isValid || isSubmitting}
                  onClick={() => router.refresh()}
                >
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};