import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableUsers() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className='text-left'>
            <TableHead>Full name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className=''>Salaire</TableHead>
            <TableHead className=''>Sex</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>Grace Bisimwa</TableCell>
            <TableCell>chiruzabisimwa@gmail.com</TableCell>
            <TableCell>27 ans</TableCell>
            <TableCell>$ 3,400</TableCell>
            <TableCell className='text-right'>
              <div className='flex flex-col md:flex-row gap-1'>
                <span className='bg-primary/50 text-primary px-5 py-2 rounded-full'>
                  Male
                </span>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
