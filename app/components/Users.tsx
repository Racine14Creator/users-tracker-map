import { Input } from "@/components/ui/input";
import React from "react";
import TableUsers from "./TableUsers";

export default function Users() {
  return (
    <div className='my-5 w-full md:max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <form action='' method='post'>
          <Input type='search' placeholder='Search...' />
        </form>
      </div>
      <TableUsers />
    </div>
  );
}
