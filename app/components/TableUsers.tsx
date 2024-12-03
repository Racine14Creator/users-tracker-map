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
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface User {
  id: number;
  fullname: string;
  email: string;
  age: number;
  salary: number;
  sex: string;
}

export default function TableUsers() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Prevent hydration mismatch by ensuring we only fetch data on the client
    setIsClient(true);

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users");
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
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
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
          <TableRow key={user.id}>
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
                <Button asChild>
                  <Link href={`/users/${user.id}`}>
                    <Pencil />
                  </Link>
                </Button>
                <Button
                  className='bg-red-600'
                  onClick={() => console.log(`Delete user ${user.id}`)}
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
