import { Battle } from "@/schema/Battle.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorAlert } from "@/components/common/ErrorAlert";

type BattleDetailTabsProps = {
  battle: Battle | null;
};

export const BattleDetailTabs: React.FC<BattleDetailTabsProps> = ({
  battle,
}: BattleDetailTabsProps) => {
  return (
    <Tabs defaultValue="problems">
      <TabsList className="border">
        <TabsTrigger value="problems">Problems</TabsTrigger>
        <TabsTrigger value="standings">Standings</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="problems">
        {!battle ? <ErrorAlert /> : <div>Problem</div>}
      </TabsContent>
      <TabsContent value="standings">
        {!battle ? <ErrorAlert /> : <div>Standings</div>}
      </TabsContent>
      <TabsContent value="analytics">
        {!battle ? <ErrorAlert /> : <div>Analytics</div>}
      </TabsContent>
    </Tabs>
  );
};

export default BattleDetailTabs;
