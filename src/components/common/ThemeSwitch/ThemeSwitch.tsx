import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

type ThemeSwitchProps = {
  className?: string;
};

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  className,
}: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <SunIcon />
      <Switch
        onClick={(e) => e.stopPropagation()}
        checked={theme === "dark"}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
      />
      <MoonIcon />
    </div>
  );
};
