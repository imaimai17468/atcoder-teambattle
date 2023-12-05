import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchInputProps = {
  keyword: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  keyword,
  onClick,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="flex items-center gap-2 rounded-md border p-3">
      <MagnifyingGlassIcon className="h-4 w-4" />
      <input
        className="w-full outline-none"
        onClick={(e) => {
          onClick && onClick();
          e.stopPropagation();
        }}
        value={keyword}
        onChange={(e) => {
          onChange && onChange(e);
        }}
      />
    </div>
  );
};
