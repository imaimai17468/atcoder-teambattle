"use client";

import { User } from "@/schema/User.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useExpectedTeamContent } from "../hooks/useExpectedTeamContent";
import { UserAvatar } from "@/components/common/UserAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { SearchInput } from "./SearchInput";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { Score } from "@/schema/Score.type";
import { Control } from "react-hook-form";
import { Battle } from "@/schema/Battle.type";
import { useWatch } from "react-hook-form";

type ExpectedTeamContentProps = {
  users: User[];
  onChange?: (teams: Score[]) => void;
  control: Control<Battle>;
};

export const ExpectedTeamContent: React.FC<ExpectedTeamContentProps> = ({
  users,
  onChange,
  control,
}: ExpectedTeamContentProps) => {
  const {
    expectedTeams,
    setExpectedTeams,
    keyword,
    setKeyword,
    isSuggestionsOpen,
    setIsSuggestionsOpen,
    suggestedUsers,
    ref,
    clickedTeamIndex,
    setClickedTeamIndex,
  } = useExpectedTeamContent({ users });
  const problems = useWatch({ name: "problems", control });

  useEffect(() => {
    if (onChange) {
      const resScore: Score[] = expectedTeams.map((expectedTeam) => {
        return {
          team: expectedTeam,
          userScore: expectedTeam.members.map((member) => {
            return {
              user: member,
              problemWithCorrectness: problems.map((problem) => {
                return {
                  problem,
                  isCorrect: false,
                  time: 0,
                };
              }),
            };
          }),
        };
      });
      onChange(resScore);
    }
  }, [expectedTeams, problems]);

  return (
    <div className="flex flex-col items-center gap-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Team Name</TableHead>
            <TableHead>Member</TableHead>
            <TableHead className="w-1/6 text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expectedTeams.length !== 0 ? (
            expectedTeams.map((expectedTeam, teamIndex) => {
              const suggestedUsersWithoutTeamMember = suggestedUsers.filter(
                (suggestedUser) =>
                  !expectedTeam.members.some(
                    (member) => member.id === suggestedUser.id,
                  ),
              );
              return (
                <TableRow key={teamIndex}>
                  <TableCell>
                    <Input
                      placeholder="Team Name"
                      onChange={(e) => {
                        const newExpectedTeams = expectedTeams.map(
                          (expectedTeam, currentIndex) => {
                            if (currentIndex === teamIndex) {
                              return {
                                ...expectedTeam,
                                name: e.target.value,
                              };
                            } else {
                              return expectedTeam;
                            }
                          },
                        );
                        setExpectedTeams(newExpectedTeams);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {expectedTeam.members.length !== 0 &&
                        expectedTeam.members.map((member, userIndex) => {
                          return (
                            <div
                              key={userIndex}
                              className="flex flex-col items-center gap-2"
                            >
                              <UserAvatar user={member} key={userIndex} />
                              <Badge
                                variant="destructive"
                                className="cursor-pointer"
                                onClick={() => {
                                  const newExpectedTeams = expectedTeams.map(
                                    (expectedTeam, currentIndex) => {
                                      if (currentIndex === teamIndex) {
                                        return {
                                          ...expectedTeam,
                                          members: expectedTeam.members.filter(
                                            (_, currentIndex) =>
                                              currentIndex !== userIndex,
                                          ),
                                        };
                                      } else {
                                        return expectedTeam;
                                      }
                                    },
                                  );
                                  setExpectedTeams(newExpectedTeams);
                                }}
                              >
                                Delete
                              </Badge>
                            </div>
                          );
                        })}
                      <div className="relative">
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          onClick={() => {
                            setIsSuggestionsOpen(true);
                            setClickedTeamIndex(teamIndex);
                          }}
                        >
                          <PlusCircledIcon />
                        </Button>
                        {teamIndex == clickedTeamIndex && isSuggestionsOpen && (
                          <Card
                            className="absolute top-12 z-10 h-48 w-64 overflow-y-scroll"
                            ref={ref}
                          >
                            <CardContent className="flex flex-col gap-4 pt-4">
                              <SearchInput
                                keyword={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                              />
                              {suggestedUsersWithoutTeamMember.map(
                                (suggestedUser, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                                      onClick={() => {
                                        const newExpectedTeams =
                                          expectedTeams.map(
                                            (expectedTeam, currentIndex) => {
                                              if (
                                                currentIndex ===
                                                clickedTeamIndex
                                              ) {
                                                return {
                                                  ...expectedTeam,
                                                  members: [
                                                    ...expectedTeam.members,
                                                    suggestedUser,
                                                  ],
                                                };
                                              } else {
                                                return expectedTeam;
                                              }
                                            },
                                          );
                                        setExpectedTeams(newExpectedTeams);
                                      }}
                                    >
                                      <UserAvatar user={suggestedUser} />
                                      <p>{suggestedUser.name}</p>
                                    </div>
                                  );
                                },
                              )}
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      type="button"
                      className="h-8 w-8 rounded-full border-destructive text-destructive hover:text-destructive"
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const newExpectedTeams = expectedTeams.filter(
                          (_, currentIndex) => currentIndex !== teamIndex,
                        );
                        setExpectedTeams(newExpectedTeams);
                      }}
                    >
                      <TrashIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No Expected Team
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Button
        type="button"
        className="flex w-fit items-center gap-2"
        variant="outline"
        onClick={() => {
          const newExpectedTeams = [
            ...expectedTeams,
            { name: "", members: [] },
          ];
          setExpectedTeams(newExpectedTeams);
        }}
      >
        <PlusCircledIcon />
        Add Expected Team
      </Button>
    </div>
  );
};
