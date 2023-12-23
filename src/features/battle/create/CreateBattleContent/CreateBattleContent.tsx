import { BattleForm } from "../../BattleForm";

import { createMockProblems } from "@/repositories/createMockProblem";
import { createMockUser, createMockUsers } from "@/repositories/createMockUser";

export const CreateBattleContent: React.FC = async () => {
  const problems = await createMockProblems(300);
  const users = await createMockUsers(300);
  const currentUser = await createMockUser();

  return (
    <BattleForm problems={problems} users={users} currentUser={currentUser} />
  );
};
