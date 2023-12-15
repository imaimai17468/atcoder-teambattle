import { User } from "@/schema/User.type";
import { Problem } from "@/schema/Problem.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import { UserAvatar } from "@/components/common/UserAvatar";

type TimelineProps = {
  timelineDataList: {
    user: User;
    time: number;
    problem: Problem;
    currentScore: number;
    teamName: string;
  }[];
};

export const Timeline: React.FC<TimelineProps> = ({
  timelineDataList,
}: TimelineProps) => {
  return (
    <Card className="h-full overflow-y-scroll">
      <CardHeader>AC Timeline</CardHeader>
      <CardContent className="flex flex-col gap-4">
        {timelineDataList.map((timelineData, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <UserAvatar user={timelineData.user} />
                <div>
                  <p className="font-bold">{timelineData.user.name}</p>
                  <CardDescription className="truncate text-sm">
                    {timelineData.teamName}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <CardTitle className="flex items-center gap-4">
                <a
                  href={timelineData.problem.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {timelineData.problem.name}
                </a>
                <p className="ml-auto">+ {timelineData.problem.score} point</p>
              </CardTitle>
              <CardDescription className="flex justify-between">
                <p>{dayjs(timelineData.time).format("MM/DD HH:mm:ss")}</p>
                <p>CurrentScore: {timelineData.currentScore}</p>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
