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

export const CreateBattleForm: React.FC = async () => {
  const problems = await createMockProblems(30);
  const users = await createMockUsers(30);

  return (
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
            <Input className="w-72" />
          </div>
          <div className="flex flex-col gap-2">
            <p>Description</p>
            <Textarea />
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
          <ExpectedTeamContent users={users} />
        </div>
        <div className="flex flex-col gap-4">
          <CardTitle>Battle ProblemSet</CardTitle>
          <ProblemSetContent problems={problems} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateBattleForm;
