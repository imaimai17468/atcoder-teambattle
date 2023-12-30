import { UserAvatar } from "@/components/common/UserAvatar";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createMockTeams } from "@/repositories/createMockTeam";

export const UserTeamContent = async () => {
  const teams = await createMockTeams(5);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Your Teams</h1>
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
