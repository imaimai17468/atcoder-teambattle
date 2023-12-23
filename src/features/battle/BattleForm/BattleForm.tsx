"use client";

import { ExpectedTeamContent } from "./ExpectedTeamContent/ExpectedTeamContent";
import { useCreateBattleForm } from "./hooks/useCreateBattleForm";
import { ProblemSetContent } from "./ProblemSetContent";

import { FullDatePicker } from "@/components/common/FullDatePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormMessageMap,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Battle } from "@/schema/Battle.type";
import { Problem } from "@/schema/Problem.type";
import { User } from "@/schema/User.type";

type BattleFormProps = {
  problems: Problem[];
  users: User[];
  currentUser: User;
  defaultValues?: Battle;
};

export const BattleForm: React.FC<BattleFormProps> = ({
  problems,
  users,
  currentUser,
  defaultValues,
}: BattleFormProps) => {
  const { form, onSubmit } = useCreateBattleForm({
    currentUser,
    defaultValues,
  });
  const { isDirty, isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mb-48">
          <CardHeader>
            <CardTitle>Create Battle</CardTitle>
            <Separator />
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <CardTitle>Basic Info</CardTitle>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Title (required)</FormLabel>
                    <FormControl>
                      <Input
                        className="w-72"
                        type="text"
                        placeholder="Battle Title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Description (required)</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-72"
                        placeholder="Battle Description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date (required)</FormLabel>
                    <FormControl>
                      <FullDatePicker {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date (required)</FormLabel>
                    <FormControl>
                      <FullDatePicker {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="scores"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-2xl">Expected Teams</FormLabel>
                  <FormDescription>
                    Expected teams to participate in this battle
                  </FormDescription>
                  <FormMessageMap />
                  <FormControl>
                    <ExpectedTeamContent
                      users={users}
                      control={form.control}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="problems"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-2xl">
                    Problem Set (required)
                  </FormLabel>
                  <FormDescription>
                    Problems to be solved in this battle
                  </FormDescription>
                  <FormMessage />
                  <FormControl>
                    <ProblemSetContent problems={problems} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              disabled={!isDirty || isSubmitting || !isValid}
            >
              Create
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
