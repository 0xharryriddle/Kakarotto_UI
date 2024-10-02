'use client';
import React from 'react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { timeLeft } from '@/utils/date.util';

interface ListingsTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export default function ListingsTable<TData, TValue>({
    columns,
    data
}: ListingsTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 5
            }
        }
    })
    return <div>
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))
                    }

                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {
                            // if (row.original == null) {
                            //     console.log(row.getVisibleCells())
                            //     return <TableRow
                            //         key={row.id || null}
                            //     >
                            //         {row.getVisibleCells().map((cell) => (
                            //             <TableCell key={cell.id}>
                            //                 {row.getVisibleCells().map((cell) => (
                            //                     <TableCell key={cell.id}>
                            //                     </TableCell>
                            //                 ))}
                            //             </TableCell>
                            //         ))}
                            //     </TableRow>

                            // }
                            const status = row.getValue('status');
                            const expiredAt = parseInt(row.getValue('expiresAt'))
                            const isOrderExpired = expiredAt * 1000 < Date.now()

                            return <TableRow
                                key={row.id}
                                className={`${(status != 'open' || isOrderExpired) && "text-secondary/70"}`}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
        </div>
    </div>
}