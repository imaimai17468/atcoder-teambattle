import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const CreateBattleForm: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Battle</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <CardDescription>Title</CardDescription>
          <Input className="w-72" />
        </div>
        <div className="flex flex-col gap-2">
          <CardDescription>Description</CardDescription>
          <Textarea />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateBattleForm;
