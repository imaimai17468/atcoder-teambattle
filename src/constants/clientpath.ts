export const CLIENT_PATH = {
  HOME: "/",
  BATTLE: "/battle",
  BATTLE_CREATE: "/battle/create",
  BATTLE_DETAIL: "/battle/detail/[battleId]",
  BATTLE_EDIT: "/battle/edit/[battleId]",
  USER: "/user/[userId]",
  USER_BATTLE: "/user/[userId]/battle",
  USER_EDIT: "/user/[userId]/edit",
  NOT_FOUND: "/404",
} as const;
