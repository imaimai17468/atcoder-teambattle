import { BattleAnalytics } from "./BattleAnalytics";
import { ProblemListTable } from "./ProblemListTable";
import { StandingsTable } from "./StandingsTable";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battle } from "@/schema/Battle.type";

type BattleDetailTabsProps = {
  battle: Battle;
};

export const BattleDetailTabs: React.FC<BattleDetailTabsProps> = ({
  battle,
}: BattleDetailTabsProps) => {
  return (
    <Tabs defaultValue="standings">
      <TabsList className="mb-4 border">
        <TabsTrigger value="standings">Standings</TabsTrigger>
        <TabsTrigger value="problems">Problems</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="standings" className="w-full overflow-x-scroll">
        <StandingsTable battle={battle} startDate={battle.startDate} />
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
