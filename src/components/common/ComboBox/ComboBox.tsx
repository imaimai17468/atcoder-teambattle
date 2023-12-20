"use client";

import clsx from "clsx";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { VList } from "virtua";

import { useComboBox } from "./hook/useComboBox";
import { SearchInput } from "../SearchInput";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboBoxProps = {
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  onChange?: (value: string) => void;
  checkVisible?: boolean;
};

export const ComboBox: React.FC<ComboBoxProps> = ({
  options,
  className,
  onChange,
  checkVisible = true,
}: ComboBoxProps) => {
  const {
    filteredOptions,
    keyword,
    setKeyword,
    open,
    setOpen,
    value,
    setValue,
  } = useComboBox({
    options,
    onChange,
  });

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx("w-[2P00px] justify-between", className)}
        >
          Select ...
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={clsx("flex w-[200px] flex-col gap-2 p-4", className)}
      >
        <SearchInput
          keyword={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <VList style={{ height: "192px" }}>
          {filteredOptions.map((option) => (
            <Button
              key={option.value}
              variant="ghost"
              onClick={() => {
                setValue(option.value);
                setOpen(false);
              }}
              className="mb-2 flex w-full items-center justify-start"
            >
              {checkVisible && (
                <Check
                  className={clsx(
                    "mr-2 h-4 w-4",
                    option.value === value ? "opacity-100" : "opacity-0",
                  )}
                />
              )}
              {option.label}
            </Button>
          ))}
        </VList>
      </PopoverContent>
    </Popover>
  );
};
