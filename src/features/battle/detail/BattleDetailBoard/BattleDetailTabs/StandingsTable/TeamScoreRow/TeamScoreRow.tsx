import { Pencil2Icon } from "@radix-ui/react-icons";

import { TeamJoinDialog } from "../../../TeamJoinDialog";

import { UserAvatar } from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Team } from "@/schema/Team.type";
import { User } from "@/schema/User.type";
import { calcElapsedTime } from "@/utils/calcElapsedTime";

type TeamScoreRowProps = {
  teamScore: {
    team: Team;
    totalScore: number;
    problemStatuses: ({
      user: User;
      time: number;
    } | null)[];
  };
  index: number;
  setIsTeamScoreDetailVisible: React.Dispatch<React.SetStateAction<boolean[]>>;
  startDate: number;
  users: User[];
};

export const TeamScoreRow: React.FC<TeamScoreRowProps> = ({
  teamScore,
  index,
  setIsTeamScoreDetailVisible,
  startDate,
  users,
}: TeamScoreRowProps) => {
  return (
    <TableRow
      key={teamScore.team.name}
      className="cursor-pointer hover:bg-gray-800/10"
      onClick={() => {
        setIsTeamScoreDetailVisible((prev) => {
          const next = [...prev];
          next[index] = !prev[index];
          return next;
        });
      }}
    >
      <TableCell className="text-center">{index + 1}</TableCell>
      <TableCell>
        <TeamJoinDialog users={users} defaultValues={teamScore.team}>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Pencil2Icon />
          </Button>
        </TeamJoinDialog>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap">{teamScore.team.name}</p>
      </TableCell>
      <TableCell>
        <div className="flex gap-4">
          {teamScore.team.members.map((member) => {
            return <UserAvatar key={member.name} user={member} />;
          })}
        </div>
      </TableCell>
      <TableCell className="text-center">{teamScore.totalScore}</TableCell>
      {teamScore.problemStatuses.map((teamScore, index) => {
        return (
          <TableCell key={index}>
            {teamScore ? (
              <div className="flex flex-col items-center gap-2">
                <UserAvatar user={teamScore.user} />
                <p>{calcElapsedTime(startDate, teamScore.time)}</p>
              </div>
            ) : (
              <div className="text-center">
                <p>-</p>
              </div>
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
