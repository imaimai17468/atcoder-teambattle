import { Team } from "@/schema/Team.type";
import { User } from "@/schema/User.type";
import { TableRow } from "@/components/ui/table";
import { TableCell } from "@/components/ui/table";
import { UserAvatar } from "@/components/common/UserAvatar";
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
};

export const TeamScoreRow: React.FC<TeamScoreRowProps> = ({
  teamScore,
  index,
  setIsTeamScoreDetailVisible,
  startDate,
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
        <div className="flex items-center justify-between gap-8">
          <p className="whitespace-nowrap">{teamScore.team.name}</p>
          <div className="flex gap-4">
            {teamScore.team.members.map((member) => {
              return <UserAvatar key={member.name} user={member} />;
            })}
          </div>
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
