import { PlusCircledIcon } from "@radix-ui/react-icons";

import { UserAvatar } from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TeamJoinDialog } from "@/features/battle/detail/BattleDetailBoard/TeamJoinDialog";
import { createMockTeams } from "@/repositories/createMockTeam";
import { createMockUsers } from "@/repositories/createMockUser";

export const UserTeamContent = async () => {
  const teams = await createMockTeams(5);
  const users = await createMockUsers(10);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Your Teams</h1>
        <TeamJoinDialog users={users}>
          <Button className="flex gap-2">
            <PlusCircledIcon />
            <p>Add Team</p>
          </Button>
        </TeamJoinDialog>
      </div>
      <Separator className="bg-gray-300" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Member</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.name}</TableCell>
              <TableCell>
                <div className="flex gap-4">
                  {team.members.map((member) => (
                    <UserAvatar key={member.id} user={member} />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
