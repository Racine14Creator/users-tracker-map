import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Form from "../components/Form";

export default function page() {
  return (
    <div className='w-full max-w-7xl mx-auto my-5'>
      <Link
        href='/'
        className='font-semibold text-2xl items-center flex flex-row gap-2'
      >
        <ChevronLeft />
        Add User
      </Link>
      <div className='my-5'>
        <Form />
      </div>
    </div>
  );
}
