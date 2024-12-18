"use client";

import Form from "@/app/_components/Form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page({ params }: { params: { _id: string } }) {
  console.log(params?._id);

  const event = "edit";

  return (
    <>
      <div className='w-full max-w-7xl mx-auto my-5'>
        <Link
          href='/'
          className='font-semibold text-2xl items-center flex flex-row gap-2'
        >
          <ChevronLeft />
          Edit - {"full name"}
        </Link>

        <Form edit={event} />
      </div>
    </>
  );
}
