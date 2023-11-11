import { Battle } from "@/schema/Battle.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorAlert } from "@/components/common/ErrorAlert";
import { LoadingAlert } from "@/components/common/LoadingAlert";
import { ProblemListTable } from "../ProblemListTable";
import { StandingsTable } from "../StandingsTable";

type BattleDetailTabsProps = {
  battle: Battle | null;
  isLoading: boolean;
};

export const BattleDetailTabs: React.FC<BattleDetailTabsProps> = ({
  battle,
  isLoading,
}: BattleDetailTabsProps) => {
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
            <StandingsTable battle={battle} isLoading={isLoading} />
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
