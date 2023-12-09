import { DatePicker } from "../DatePicker";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

type FullDatePickerProps = {
  onChange: (date: Date) => void;
  value?: Date;
};

export const FullDatePicker: React.FC<FullDatePickerProps> = ({
  onChange,
  value,
}: FullDatePickerProps) => {
  const [date, setDate] = useState<Date>(value || new Date());

  useEffect(() => {
    onChange(date);
  }, [date]);

  return (
    <div className="flex gap-2">
      <DatePicker
        onChange={(newDate) => {
          const newDateWithTime = new Date(date);
          newDateWithTime.setFullYear(
            newDate.getFullYear(),
            newDate.getMonth(),
            newDate.getDate(),
          );
          setDate(newDateWithTime);
        }}
        value={value || new Date()}
      />
      <Input
        type="time"
        className="w-32"
        onChange={(e) => {
          const [hour, minute] = e.target.value.split(":");
          const newDate = new Date(date);
          newDate.setHours(parseInt(hour));
          newDate.setMinutes(parseInt(minute));
          setDate(newDate);
        }}
        value={date.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}
      />
    </div>
  );
};

export default FullDatePicker;
