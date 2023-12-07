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
import { DatePicker } from "@/components/common/DatePicker";
import { Separator } from "@/components/ui/separator";
import { ProblemSetContent } from "./components/ProblemSetContent";
import { createMockProblems } from "@/repositories/createMockProblem";
import { ExpectedTeamContent } from "./components/ExpectedTeamContent";
import { createMockUsers } from "@/repositories/createMockUser";
import { useCreateBattleForm } from "./hooks/useCreateBattleForm";

export const CreateBattleForm: React.FC = () => {
  const problems = createMockProblems(30);
  const users = createMockUsers(30);

  const { onSubmit, register, isDirty, isSubmitting, isValid } =
    useCreateBattleForm();

  return (
    <form onSubmit={onSubmit}>
      <Card className="mb-48">
        <CardHeader>
          <CardTitle>Create Battle</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <CardTitle>Basic Info</CardTitle>
            <div className="flex flex-col gap-2">
              <p>Title</p>
              <Input
                className="w-72"
                required
                type="text"
                placeholder="Battle Title"
                {...register("title")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Description</p>
              <Textarea
                placeholder="Battle Description"
                {...register("description")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Start Time</p>
              <div className="flex gap-2">
                <DatePicker />
                <Input type="time" className="w-32" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>End Time</p>
              <div className="flex gap-2">
                <DatePicker />
                <Input type="time" className="w-32" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <CardTitle>Expected Teams</CardTitle>
            <ExpectedTeamContent
              users={users}
              onChange={(teams) => {
                console.log(teams);
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <CardTitle>Battle ProblemSet</CardTitle>
            <ProblemSetContent problems={problems} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={!isDirty || isSubmitting || !isValid}>
            Create
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateBattleForm;
