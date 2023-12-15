import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  variant = "light",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "light" | "dark";
}) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md",
        className,
        variant === "light" ? "bg-gray-200" : "bg-gray-700",
      )}
      {...props}
    />
  );
};
