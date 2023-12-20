import { TrashIcon } from "@radix-ui/react-icons";
import { MouseEventHandler } from "react";

import { Button } from "@/components/ui/button";

type DeleteButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
}: DeleteButtonProps) => {
  return (
    <Button
      type="button"
      className="h-8 w-8 rounded-full border-destructive text-destructive hover:text-destructive"
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      <TrashIcon />
    </Button>
  );
};
