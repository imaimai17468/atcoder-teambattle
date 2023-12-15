"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Skeleton } from "@/components/common/Skeleton/Skeleton";

export const LoadingDashBoard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold sm:text-2xl">DashBoard</h1>
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
          <CaretSortIcon />
        </Button>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-4 sm:grid-cols-3",
          isOpen ? "grid sm:hidden" : "hidden sm:grid",
        )}
      >
        <Card>
          <CardHeader className="text-sm">Running Battles</CardHeader>
          <CardContent className="flex justify-center sm:justify-start">
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm">Active Teams</CardHeader>
          <CardContent className="flex justify-center gap-2 text-xl font-bold sm:justify-start">
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm">Active Users</CardHeader>
          <CardContent className="flex justify-center gap-2 text-xl font-bold sm:justify-start">
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoadingDashBoard;
