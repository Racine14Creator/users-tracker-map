import Form from "@/app/_components/Form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const event = "edit";

  return (
    <>
      <div className='w-full max-w-7xl mx-auto my-5'>
        <Link
          href='/'
          className='font-semibold text-2xl items-center flex flex-row gap-2'
        >
          <ChevronLeft />
          Edit - {id}
        </Link>

        <Form edit={event} />
      </div>
    </>
  );
}
