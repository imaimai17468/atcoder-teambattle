"use client";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { Control, useWatch } from "react-hook-form";
import { ulid } from "ulidx";
import { VList } from "virtua";

import { useExpectedTeamContent } from "./hooks/useExpectedTeamContent";

import { DeleteButton } from "@/components/common/DeleteButton";
import { LoadingAlert } from "@/components/common/LoadingAlert";
import { SearchInput } from "@/components/common/SearchInput";
import { UserAvatar } from "@/components/common/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Battle } from "@/schema/Battle.type";
import { Score } from "@/schema/Score.type";
import { User } from "@/schema/User.type";

type ExpectedTeamContentProps = {
  users: User[];
  onChange?: (teams: Score[]) => void;
  control: Control<Battle>;
  value: Score[] | null;
};

export const ExpectedTeamContent: React.FC<ExpectedTeamContentProps> = ({
  users,
  onChange,
  control,
  value,
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
  } = useExpectedTeamContent({ users, value });
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
      <div className="w-full overflow-x-scroll md:overflow-visible">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-72">Team Name</TableHead>
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
                        className="w-32 md:w-full"
                        value={expectedTeam.name}
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
                      <div className="flex flex-nowrap gap-2">
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
                                            members:
                                              expectedTeam.members.filter(
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
                          {teamIndex == clickedTeamIndex &&
                            isSuggestionsOpen && (
                              <Card
                                className="fixed left-1/2 top-1/2 z-10 w-96 -translate-x-1/2 -translate-y-1/2 md:absolute md:left-0 md:top-12 md:translate-x-0 md:translate-y-0"
                                ref={ref}
                              >
                                <CardContent className="flex flex-col gap-4 pt-4">
                                  <SearchInput
                                    keyword={keyword}
                                    onChange={(e) => {
                                      setKeyword(e.target.value);
                                    }}
                                    placeholder="Please enter more than one character"
                                  />
                                  {suggestedUsersWithoutTeamMember.length ===
                                  0 ? (
                                    <LoadingAlert />
                                  ) : (
                                    <VList style={{ height: "192px" }}>
                                      {suggestedUsersWithoutTeamMember.map(
                                        (suggestedUser, index) => {
                                          return (
                                            <div
                                              key={index}
                                              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100"
                                              onClick={() => {
                                                const newExpectedTeams =
                                                  expectedTeams.map(
                                                    (
                                                      expectedTeam,
                                                      currentIndex,
                                                    ) => {
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
                                                setExpectedTeams(
                                                  newExpectedTeams,
                                                );
                                              }}
                                            >
                                              <UserAvatar
                                                user={suggestedUser}
                                                withoutCard
                                              />
                                              <p>{suggestedUser.name}</p>
                                            </div>
                                          );
                                        },
                                      )}
                                    </VList>
                                  )}
                                </CardContent>
                              </Card>
                            )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <DeleteButton
                        onClick={() => {
                          const newExpectedTeams = expectedTeams.filter(
                            (_, currentIndex) => currentIndex !== teamIndex,
                          );
                          setExpectedTeams(newExpectedTeams);
                        }}
                      />
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
      </div>
      <Button
        type="button"
        className="flex w-fit items-center gap-2"
        variant="outline"
        onClick={() => {
          const newExpectedTeams = [
            ...expectedTeams,
            { id: ulid(), name: "", members: [] },
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
