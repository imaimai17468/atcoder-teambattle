import clsx from "clsx";

type DifficultyMarkProps = {
  difficulty: number;
};

const difficultyMap = [
  { color: "bg-gray-500 border-gray-500", range: { min: 0, max: 399 } },
  { color: "bg-yellow-900 border-yellow-900", range: { min: 400, max: 799 } },
  { color: "bg-green-500 border-green-500", range: { min: 800, max: 1199 } },
  { color: "bg-cyan-300 border-cyan-300", range: { min: 1200, max: 1599 } },
  { color: "bg-blue-500 border-blue-500", range: { min: 1600, max: 1999 } },
  { color: "bg-yellow-500 border-yellow-500", range: { min: 2000, max: 2399 } },
  { color: "bg-amber-500 border-amber-500", range: { min: 2400, max: 2799 } },
  { color: "bg-red-500 border-red-500", range: { min: 2800, max: 3199 } },
  {
    color:
      "bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900 border-yellow-900",
    range: { min: 3200, max: 3599 },
  },
  {
    color:
      "bg-gradient-to-r from-gray-500 via-gray-100 to-gray-500 border-gray-500",
    range: { min: 3600, max: 3999 },
  },
  {
    color:
      "bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500 border-yellow-500",
    range: { min: 4000, max: 9999 },
  },
];

const defaultColor = { color: "bg-gray-500 border-gray-500" };

export const DifficultMark = ({ difficulty = 0 }: DifficultyMarkProps) => {
  const { color } =
    difficulty >= 0 || difficulty <= 9999
      ? difficultyMap.filter(({ range }) => {
          if (difficulty)
            return range.min <= difficulty && difficulty <= range.max;
          else return range.min <= 0 && 0 <= range.max;
        })[0] || defaultColor
      : defaultColor;

  return (
    <div
      className={clsx(
        "flex h-4 w-4 rounded-ee-sm rounded-es-sm border border-t-0",
        color,
      )}
    >
      <div
        className="w-4 rounded-ee-sm rounded-es-sm bg-white"
        style={{
          height: `${
            difficulty < 4000 ? ((400 - (difficulty % 400)) / 400) * 15 : 0
          }px`,
        }}
      />
    </div>
  );
};

export default DifficultMark;
