import { Input } from "@/components/ui/input";
import React from "react";
import TableUsers from "./TableUsers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Users() {
  return (
    <div className='my-5 w-full md:max-w-7xl mx-auto'>
      <div className='my-5 flex flex-col md:flex-row justify-between items-center'>
        <form action='' method='post'>
          <Input type='search' placeholder='Search...' />
        </form>
        <Button asChild>
          <Link href='/add-user'>Add User</Link>
        </Button>
      </div>
      <TableUsers />
    </div>
  );
}
