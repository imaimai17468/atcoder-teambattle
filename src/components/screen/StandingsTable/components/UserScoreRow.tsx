import { Score } from "@/schema/Score.type";
import { TableCell, TableRow } from "@/components/ui/table";
import clsx from "clsx";
import { UserAvatar } from "@/components/common/UserAvatar";
import { calcElapsedTime } from "@/utils/calcElapsedTime";

type UserScoreRowProps = {
  userScore: Score["userScore"][0];
  visible: boolean;
  startDate: number;
};

export const UserScoreRow: React.FC<UserScoreRowProps> = ({
  userScore,
  visible,
  startDate,
}: UserScoreRowProps) => {
  return (
    <TableRow
      key={userScore.user.name}
      className={clsx("border-none", visible ? "table-row" : "hidden")}
    >
      <TableCell colSpan={2} />
      <TableCell>
        <UserAvatar user={userScore.user} />
      </TableCell>
      {userScore.problemWithCorrectness.map((problemWithCorrectness) => {
        return (
          <TableCell key={problemWithCorrectness.time} className="text-center">
            {problemWithCorrectness.isCollect
              ? calcElapsedTime(startDate, problemWithCorrectness.time)
              : "-"}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
