'use client';
import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';
import { Plus, Pencil, Trash2, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
export type AdminRow = {
  id: string;
  name: string;
  detail: string;
  status: string;
};
const columns: ColumnDef<AdminRow>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <button
        className="flex cursor-pointer items-center gap-2 uppercase hover:text-foreground"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Title / name
        <ArrowUpDown size={13} aria-hidden="true" />
      </button>
    ),
    cell: ({ row }) => <span>{row.original.name}</span>,
  },
  { accessorKey: 'detail', header: 'Details' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Badge>{row.original.status}</Badge>,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex gap-1">
        <Button
          size="icon"
          variant="ghost"
          disabled
          aria-label={`Edit ${row.original.name} (coming soon)`}
        >
          <Pencil size={15} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          disabled
          aria-label={`Delete ${row.original.name} (coming soon)`}
        >
          <Trash2 size={15} />
        </Button>
      </div>
    ),
  },
];
export function AdminDataTable({
  title,
  rows,
}: {
  title: string;
  rows: AdminRow[];
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState('');
  // React Compiler is not enabled; TanStack owns the table instance lifecycle.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: rows,
    columns,
    state: { sorting, globalFilter: search },
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });
  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="page-title">({title})</h1>
        </div>
        <Button disabled>
          <Plus size={17} aria-hidden="true" />
          Add New
        </Button>
      </div>
      <Input
        className="mb-8 max-w-sm"
        aria-label={`Search ${title.toLowerCase()}`}
        placeholder={`Search ${title.toLowerCase()}…`}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          table.setPageIndex(0);
        }}
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[15px]">
          <thead className="border-b border-foreground">
            {table.getHeaderGroups().map((h) => (
              <tr key={h.id}>
                {h.headers.map((c) => (
                  <th
                    key={c.id}
                    scope="col"
                    aria-sort={
                      c.column.getIsSorted() === 'asc'
                        ? 'ascending'
                        : c.column.getIsSorted() === 'desc'
                          ? 'descending'
                          : undefined
                    }
                    className="meta py-2 pr-4 font-normal text-muted"
                  >
                    {flexRender(c.column.columnDef.header, c.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((r) => (
              <tr
                key={r.id}
                className="border-b border-foreground transition-colors hover:bg-subtle"
              >
                {r.getVisibleCells().map((c) => (
                  <td key={c.id} className="py-2 pr-4">
                    {flexRender(c.column.columnDef.cell, c.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            {!table.getRowModel().rows.length && (
              <tr>
                <td colSpan={4} className="p-10 text-center text-muted">
                  No matching records.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p role="status" className="meta">
          {table.getFilteredRowModel().rows.length} records · Page{' '}
          {table.getState().pagination.pageIndex + 1} of{' '}
          {Math.max(1, table.getPageCount())}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
