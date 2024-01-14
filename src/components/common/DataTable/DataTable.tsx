"use client";

import {
  useSensors,
  useSensor,
  PointerSensor,
  DragEndEvent,
  closestCenter,
  DndContext,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  SlashIcon,
} from "@radix-ui/react-icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

import { SortableDataTableRow } from "./SortableDataTableRow";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (id: T) => void;
  draggable?: boolean;
  setData?: (data: T[]) => void;
};

export const DataTable = <T,>({
  data,
  columns,
  onRowClick,
  draggable = false,
  setData,
}: DataTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (setData && over)
      setData(arrayMove(data, Number(active.id), Number(over.id)));
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-x-scroll">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: " ⬆︎",
                        desc: " ⬇︎",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {draggable ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            autoScroll={false}
          >
            <SortableContext
              strategy={verticalListSortingStrategy}
              items={table.getRowModel().rows.map((row) => row.id)}
            >
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <SortableDataTableRow
                    key={row.id}
                    row={row}
                    onRowClick={onRowClick}
                  />
                ))}
                {table.getRowModel().rows.length === 0 && (
                  <TableRow>
                    <TableCell>
                      <p>No data</p>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </SortableContext>
            <DragOverlay />
          </DndContext>
        ) : (
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer hover:bg-gray-800/10"
                onClick={() => {
                  if (onRowClick) onRowClick(row.original);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {table.getRowModel().rows.length === 0 && (
              <TableRow>
                <TableCell>
                  <p>No data</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowRightIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <DoubleArrowRightIcon />
        </Button>
        <div className="flex items-center gap-2 text-sm">
          <p>Page</p>
          <p>{table.getState().pagination.pageIndex + 1}</p>
          <p>of</p>
          <p>{table.getPageCount()}</p>
        </div>
        <SlashIcon />
        <div className="flex items-center gap-2 text-sm">
          <p className="whitespace-nowrap">Go to page:</p>
          <Input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </div>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="w-32">
            <SelectValue>
              Show {table.getState().pagination.pageSize}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="w-32">
            {[10, 25, 50, 75, 100].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()}>
                Show {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
