import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import {
  HamburgerMenuIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gray-200/10 px-8  py-4 backdrop-blur-md">
      <h1 className="text-xl font-bold sm:text-2xl">AtCoder Team Battle</h1>
      <div className="hidden gap-8 sm:flex">
        <Button variant="ghost" className="flex gap-2">
          <RocketIcon />
          Battles
        </Button>
        <Button variant="ghost" className="flex gap-2">
          <PersonIcon />
          Profile
        </Button>
        <Button variant="outline" className="flex gap-2">
          <ExitIcon />
          Logout
        </Button>
      </div>
      <div className="block sm:hidden">
        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HamburgerMenuIcon />
        </Button>
        {isMenuOpen && (
          <div className="absolute right-4 top-16 flex flex-col gap-4 rounded-md border bg-gray-50 p-2 shadow-md">
            <Button variant="ghost" className="flex gap-2">
              <RocketIcon />
              Battles
            </Button>
            <Button variant="ghost" className="flex gap-2">
              <PersonIcon />
              Profile
            </Button>
            <Button variant="outline" className="flex gap-2">
              <ExitIcon />
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
