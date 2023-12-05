import { useState, useRef } from "react";
import { User } from "@/schema/User.type";
import { Team } from "@/schema/Team.type";
import { useClickAway } from "react-use";

export const useExpectedTeamContent = ({ users }: { users: User[] }) => {
  const [expectedTeams, setExpectedTeams] = useState<Team[]>([]);
  const [keyword, setKeyword] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [clickedTeamIndex, setClickedTeamIndex] = useState(-1);

  const suggestedUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(keyword.toLowerCase());
  });

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsSuggestionsOpen(false);
  });

  return {
    expectedTeams,
    setExpectedTeams,
    keyword,
    setKeyword,
    suggestedUsers,
    isSuggestionsOpen,
    setIsSuggestionsOpen,
    ref,
    clickedTeamIndex,
    setClickedTeamIndex,
  };
};
