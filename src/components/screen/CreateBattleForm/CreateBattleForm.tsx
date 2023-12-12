"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ProblemSetContent } from "./components/ProblemSetContent";
import { createMockProblems } from "@/repositories/createMockProblem";
import { ExpectedTeamContent } from "./components/ExpectedTeamContent";
import { createMockUsers, createMockUser } from "@/repositories/createMockUser";
import { useCreateBattleForm } from "./hooks/useCreateBattleForm";
import { FullDatePicker } from "@/components/common/FullDatePicker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const CreateBattleForm: React.FC = () => {
  const problems = createMockProblems(30);
  const users = createMockUsers(30);
  const currentUser = createMockUser();

  const { form, onSubmit } = useCreateBattleForm(currentUser);
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
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        className="w-72"
                        required
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-72"
                        required
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
                    <FormLabel>Start Date</FormLabel>
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
                    <FormLabel>End Date</FormLabel>
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
                  <FormControl>
                    <ExpectedTeamContent
                      users={users}
                      control={form.control}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="problems"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-2xl">Problem Set</FormLabel>
                  <FormDescription>
                    Problems to be solved in this battle
                  </FormDescription>
                  <FormControl>
                    <ProblemSetContent problems={problems} {...field} />
                  </FormControl>
                  <FormMessage />
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

export default CreateBattleForm;
