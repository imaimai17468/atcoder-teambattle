"use client";

import { useMemo, useState, useEffect } from "react";

import { ComboBox } from "@/components/common/ComboBox";
import { DeleteButton } from "@/components/common/DeleteButton";
import { UserAvatar } from "@/components/common/UserAvatar";
import { User } from "@/schema/User.type";

type SelectMembersProps = {
  users: User[];
  onChange: (users: User[]) => void;
};

export const SelectMembers: React.FC<SelectMembersProps> = ({
  users,
  onChange,
}: SelectMembersProps) => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const selectUserOptions = useMemo(() => {
    return users
      .filter((user) => !selectedUsers.includes(user))
      .map((user) => ({
        label: user.name,
        value: user.name,
      }));
  }, [users, selectedUsers]);

  useEffect(() => {
    onChange(selectedUsers);
  }, [selectedUsers]);

  return (
    <div className="flex flex-col gap-2">
      {selectedUsers.map((user) => (
        <div key={user.id} className="flex items-center gap-2">
          <UserAvatar user={user} />
          <p className="text-muted-foreground">{user.name}</p>
          <DeleteButton
            onClick={() =>
              setSelectedUsers((prev) =>
                prev.filter((prevUser) => prevUser.id !== user.id),
              )
            }
          />
        </div>
      ))}
      <ComboBox
        options={selectUserOptions}
        className="w-full"
        checkVisible={false}
        onChange={(value) => {
          const user = users.find((user) => user.name === value);
          if (user) setSelectedUsers([...selectedUsers, user]);
        }}
      />
    </div>
  );
};
