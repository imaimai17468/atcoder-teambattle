import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchInputProps = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  openSuggestedProblemList: () => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  keyword,
  setKeyword,
  openSuggestedProblemList,
}: SearchInputProps) => {
  return (
    <div className="flex items-center gap-2 rounded-md border p-3">
      <MagnifyingGlassIcon className="h-4 w-4" />
      <input
        className="w-full outline-none"
        onClick={(e) => {
          openSuggestedProblemList();
          e.stopPropagation();
        }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};
