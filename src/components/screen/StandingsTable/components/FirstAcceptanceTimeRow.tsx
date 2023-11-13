import { User } from "@/schema/User.type";
import { TableRow, TableCell } from "@/components/ui/table";
import { UserAvatar } from "@/components/common/UserAvatar";
import { calcElapsedTime } from "@/utils/calcElapsedTime";

type FirstAcceptanceTimeRowProps = {
  firstAcceptanceTimes: ({
    user: User;
    time: number;
  } | null)[];
  startDate: number;
};

export const FirstAcceptanceTimeRow: React.FC<FirstAcceptanceTimeRowProps> = ({
  firstAcceptanceTimes,
  startDate,
}: FirstAcceptanceTimeRowProps) => {
  return (
    <TableRow>
      <TableCell colSpan={3} className="text-right font-bold">
        First Acceptance Time
      </TableCell>
      {firstAcceptanceTimes.map((firstAcceptanceTime, index) => {
        return (
          <TableCell key={index} className="text-center">
            {firstAcceptanceTime ? (
              <div className="flex flex-col items-center gap-2">
                <UserAvatar user={firstAcceptanceTime.user} />
                <p>{calcElapsedTime(startDate, firstAcceptanceTime.time)}</p>
              </div>
            ) : (
              <p>-</p>
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
