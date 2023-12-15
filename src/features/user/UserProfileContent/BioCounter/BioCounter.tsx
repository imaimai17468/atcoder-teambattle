import { Control } from "react-hook-form";
import { useWatch } from "react-hook-form";
import { User } from "@/schema/User.type";

export const BioCounter = ({
  control,
  children,
}: {
  control: Control<User>;
  children: (count: number) => React.ReactNode;
}) => {
  const bio = useWatch({
    name: "bio",
    control,
  });
  return <>{children(bio?.length ?? 0)}</>;
};
