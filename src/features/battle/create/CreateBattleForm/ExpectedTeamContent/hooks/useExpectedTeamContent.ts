"use client";

import { useState, useRef } from "react";
import { useClickAway } from "react-use";

import { Team } from "@/schema/Team.type";
import { User } from "@/schema/User.type";

export const useExpectedTeamContent = ({ users }: { users: User[] }) => {
  const [expectedTeams, setExpectedTeams] = useState<Team[]>([]);
  const [keyword, setKeyword] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [clickedTeamIndex, setClickedTeamIndex] = useState(-1);

  const suggestedUsers = keyword.length
    ? users.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
      })
    : [];

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
