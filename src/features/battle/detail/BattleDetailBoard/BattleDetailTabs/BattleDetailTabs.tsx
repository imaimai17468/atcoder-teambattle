import { BattleAnalytics } from "./BattleAnalytics";
import { ProblemListTable } from "./ProblemListTable";
import { StandingsTable } from "./StandingsTable";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battle } from "@/schema/Battle.type";
import { User } from "@/schema/User.type";

type BattleDetailTabsProps = {
  battle: Battle;
  users: User[];
};

export const BattleDetailTabs: React.FC<BattleDetailTabsProps> = ({
  battle,
  users,
}: BattleDetailTabsProps) => {
  return (
    <Tabs defaultValue="standings">
      <TabsList className="mb-4 border">
        <TabsTrigger value="standings">Standings</TabsTrigger>
        <TabsTrigger value="problems">Problems</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="standings" className="w-full overflow-x-scroll">
        <StandingsTable
          battle={battle}
          users={users}
          startDate={battle.startDate}
        />
      </TabsContent>
      <TabsContent value="problems">
        <ProblemListTable problems={battle.problems} />
      </TabsContent>
      <TabsContent value="analytics">
        <BattleAnalytics battle={battle} />
      </TabsContent>
    </Tabs>
  );
};
