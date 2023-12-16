"use client";

import {
  PersonIcon,
  RocketIcon,
  ChatBubbleIcon,
  HomeIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { UserAvatar } from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CLIENT_PATH } from "@/constants/clientpath";
import { createMockUser } from "@/repositories/createMockUser";

export const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const currentUser = createMockUser();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gray-200/10 px-8  py-4 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <Image src="/favicon.png" width={48} height={48} alt="icon" />
          <Link
            className="text-xl font-bold sm:text-2xl"
            href={CLIENT_PATH.HOME}
          >
            AtCoder Team Battle
          </Link>
        </div>
        <div className=" hidden gap-2 md:flex">
          <Button
            variant="ghost"
            className="flex gap-2"
            onClick={() => router.push(CLIENT_PATH.BATTLE)}
          >
            <RocketIcon />
            Battles
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2"
            onClick={() => router.push(CLIENT_PATH.BATTLE)}
          >
            <ChatBubbleIcon />
            Contact
          </Button>
        </div>
      </div>
      {isLogin ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar user={currentUser} withoutCard />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <div className="block md:hidden">
              <DropdownMenuLabel>Contents</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  router.push(CLIENT_PATH.USER.replace("[userId]", "me"));
                }}
                className="flex gap-2"
              >
                <RocketIcon />
                Battles
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <ChatBubbleIcon />
                Contact
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </div>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                router.push(CLIENT_PATH.USER.replace("[userId]", "me"));
              }}
              className="flex gap-2"
            >
              <PersonIcon />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2">
              <HomeIcon />
              Team
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex gap-2"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              <ExitIcon />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Login
        </Button>
      )}
    </header>
  );
};
