"use client";

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
  FormMessageMap,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Team } from "@/schema/Team.type";
import { User } from "@/schema/User.type";

type TeamJoinDialogProps = {
  defaultValues?: Team;
  children: React.ReactNode;
  users: User[];
};

export const TeamJoinDialog: React.FC<TeamJoinDialogProps> = ({
  defaultValues,
  children,
  users,
}: TeamJoinDialogProps) => {
  const { onSubmit, form } = useSubmitTeamForm({ defaultValues });
  const { isDirty, isSubmitting, isValid } = form.formState;

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
                  <FormMessageMap />
                </FormItem>
              )}
            />
            <DialogFooter>
              {!isDirty || !isValid || isSubmitting ? (
                <Button type="submit" disabled={true}>
                  Save changes
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="submit">Save changes</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
