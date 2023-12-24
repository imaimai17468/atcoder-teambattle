"use client";

import { useState, useRef, useMemo } from "react";
import { useClickAway } from "react-use";

import { Score } from "@/schema/Score.type";
import { Team } from "@/schema/Team.type";
import { User } from "@/schema/User.type";

type UseExpectedTeamContentProps = {
  users: User[];
  value: Score[] | null;
};

export const useExpectedTeamContent = ({
  users,
  value,
}: UseExpectedTeamContentProps) => {
  const [expectedTeams, setExpectedTeams] = useState<Team[]>(
    value ? value.map((score) => score.team) : [],
  );
  const [keyword, setKeyword] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [clickedTeamIndex, setClickedTeamIndex] = useState(-1);

  const suggestedUsers = useMemo(() => {
    return keyword.length
      ? users.filter((user) => {
          return user.name.toLowerCase().includes(keyword.toLowerCase());
        })
      : [];
  }, [users, keyword]);

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
