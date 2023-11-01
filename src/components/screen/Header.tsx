import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <h1 className="text-2xl font-bold">AtCoder Team Battle</h1>
      <div className="flex gap-8">
        <Button variant="ghost">Battles</Button>
        <Button variant="ghost">Profile</Button>
        <Button variant="outline" className="flex gap-2">
          <ExitIcon />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
