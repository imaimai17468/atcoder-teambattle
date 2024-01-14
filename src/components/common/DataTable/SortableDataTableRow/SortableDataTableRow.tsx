import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Row, flexRender } from "@tanstack/react-table";

import { TableRow, TableCell } from "@/components/ui/table";

type DataTableRowProps<T> = {
  row: Row<T>;
  onRowClick?: (id: T) => void;
};

export const SortableDataTableRow = <T,>({
  row,
  onRowClick,
}: DataTableRowProps<T>) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: row.id,
    });

  return (
    <TableRow
      key={row.id}
      className="cursor-pointer hover:bg-gray-800/10"
      onClick={() => {
        if (onRowClick) onRowClick(row.original);
      }}
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};
