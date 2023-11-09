import { Battle } from "@/schema/Battle.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorAlert } from "@/components/common/ErrorAlert";
import { LoadingAlert } from "@/components/common/LoadingAlert";
import ProblemListTable from "../ProblemListTable/ProblemListTable";

type BattleDetailTabsProps = {
  battle: Battle | null;
  isLoading: boolean;
};

export const BattleDetailTabs: React.FC<BattleDetailTabsProps> = ({
  battle,
  isLoading,
}: BattleDetailTabsProps) => {
  console.log(isLoading);
  return (
    <Tabs defaultValue="problems">
      <TabsList className="border">
        <TabsTrigger value="problems">Problems</TabsTrigger>
        <TabsTrigger value="standings">Standings</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      {!battle ? (
        <>{isLoading ? <LoadingAlert /> : <ErrorAlert />}</>
      ) : (
        <>
          <TabsContent value="problems">
            <ProblemListTable
              problems={battle.problems}
              isLoading={isLoading}
            />
          </TabsContent>
          <TabsContent value="standings">
            <div>Standings</div>
          </TabsContent>
          <TabsContent value="analytics">
            <div>Analytics</div>
          </TabsContent>
        </>
      )}
    </Tabs>
  );
};

export default BattleDetailTabs;
