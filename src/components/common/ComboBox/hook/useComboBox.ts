import { useState, useEffect, useMemo } from "react";

type UseComboBoxProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange?: (value: string) => void;
};

export const useComboBox = ({ options, onChange }: UseComboBoxProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [options, keyword]);

  return {
    open,
    setOpen,
    value,
    setValue,
    keyword,
    setKeyword,
    filteredOptions,
  };
};
