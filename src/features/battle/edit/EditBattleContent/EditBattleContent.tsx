import { createMockBattle } from "../../../../repositories/createMockBattle";
import { BattleForm } from "../../BattleForm";

import { createMockProblems } from "@/repositories/createMockProblem";
import { createMockUser, createMockUsers } from "@/repositories/createMockUser";

export const EditBattleContent: React.FC = async () => {
  const problems = await createMockProblems(300);
  const users = await createMockUsers(300);
  const currentUser = await createMockUser();
  const battle = await createMockBattle({ variant: "running" });

  return (
    <BattleForm
      problems={problems}
      users={users}
      currentUser={currentUser}
      defaultValues={battle}
    />
  );
};
