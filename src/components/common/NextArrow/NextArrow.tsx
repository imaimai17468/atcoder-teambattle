import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { HTMLAttributes } from "react";
import clsx from "clsx";

export const NextArrow = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx("flex w-full justify-center", className)} {...props}>
      <DoubleArrowDownIcon className="-translate-y-1/2 animate-bounce" />
    </div>
  );
};

export default NextArrow;
