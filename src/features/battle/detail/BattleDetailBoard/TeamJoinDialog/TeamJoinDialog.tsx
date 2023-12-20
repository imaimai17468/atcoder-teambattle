import { SelectMembers } from "./SelectMembers";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/schema/User.type";

type TeamJoinDialogProps = {
  users: User[];
};

export const TeamJoinDialog: React.FC<TeamJoinDialogProps> = ({
  users,
}: TeamJoinDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Join</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Participate as a Team</DialogTitle>
          <DialogDescription>
            You can join this battle as a team. Please fill the form below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Team Name
            </Label>
            <Input id="name" placeholder="Team Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="username" className="text-right">
              Team Member
            </Label>
            <div className="col-span-3">
              <SelectMembers
                users={users}
                onChange={(users) => console.log(users)}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
