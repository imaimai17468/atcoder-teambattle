import { Battle } from "@/schema/Battle.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProblemListTable } from "./ProblemListTable";
import { StandingsTable } from "./StandingsTable";
import { BattleAnalytics } from "./BattleAnalytics";

type BattleDetailTabsProps = {
  battle: Battle;
};

export const BattleDetailTabs: React.FC<BattleDetailTabsProps> = ({
  battle,
}: BattleDetailTabsProps) => {
  return (
    <Tabs defaultValue="problems">
      <TabsList className="mb-4 border">
        <TabsTrigger value="problems">Problems</TabsTrigger>
        <TabsTrigger value="standings">Standings</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="problems">
        <ProblemListTable problems={battle.problems} />
      </TabsContent>
      <TabsContent value="standings">
        <StandingsTable battle={battle} startDate={battle.startDate} />
      </TabsContent>
      <TabsContent value="analytics">
        <BattleAnalytics battle={battle} />
      </TabsContent>
    </Tabs>
  );
};
