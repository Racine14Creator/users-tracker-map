// import EditForm from "@/app/_components/EditForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/users/${id}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  console.log(data);

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

        <Suspense fallback={<div>Loading...</div>}>
          {/* <EditForm data={data} /> */}
        </Suspense>
      </div>
    </>
  );
}
