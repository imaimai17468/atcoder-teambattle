import { useState, useEffect } from "react";

import { DatePicker } from "../DatePicker";

import { Input } from "@/components/ui/input";

type FullDatePickerProps = {
  onChange: (date: number) => void;
  value?: number;
};

export const FullDatePicker: React.FC<FullDatePickerProps> = ({
  onChange,
  value,
}: FullDatePickerProps) => {
  const [date, setDate] = useState<number>(value || new Date().getTime());

  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <div className="flex gap-2">
      <DatePicker
        onChange={(newDate) => {
          const newDateWithTime = new Date(date);
          const currentDate = new Date(newDate);
          newDateWithTime.setFullYear(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
          );
          setDate(newDateWithTime.getTime());
        }}
        value={value || new Date().getTime()}
      />
      <Input
        type="time"
        className="w-32"
        value={new Date(date).toLocaleTimeString("ja-JP", {
          hour: "2-digit",
          minute: "2-digit",
        })}
        onChange={(e) => {
          const newDate = new Date(date);
          const [hour, minute] = e.target.value.split(":");
          newDate.setHours(parseInt(hour));
          newDate.setMinutes(parseInt(minute));
          setDate(newDate.getTime());
        }}
      />
    </div>
  );
};
