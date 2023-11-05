import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-gray-200/10 px-8 py-4  backdrop-blur-md">
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
