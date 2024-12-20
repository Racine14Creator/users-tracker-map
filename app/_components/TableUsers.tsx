"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LoaderIcon, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { User } from "@/utils/types/user-type";

export default function TableUsers() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // Prevent hydration mismatch by ensuring we only fetch data on the client
    setIsClient(true);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/users`);
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isClient || isLoading) {
    return (
      <div className='flex justify-center items-center h-[50vh]'>
        <div className='animate-spin rounded-full h-20 w-20 border-b-5 border-primary'></div>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className='text-left'>
          <TableHead>Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Sex</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user._id}>
            <TableCell className='font-bold'>{user.fullname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age || "N/A"}</TableCell>
            <TableCell>${user.salary}</TableCell>
            <TableCell>
              <span className='bg-primary/50 text-primary px-5 py-2 rounded-full'>
                {user.sex}
              </span>
            </TableCell>
            <TableCell>
              <div className='flex flex-row gap-2'>
                <Button asChild type='button'>
                  <Link href={`/users/${user._id}`}>
                    {isLoading ? <LoaderIcon /> : <Pencil />}
                  </Link>
                </Button>
                <Button
                  className='bg-red-600'
                  onClick={() => console.log(`Delete user ${user._id}`)}
                >
                  <Trash2 />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
