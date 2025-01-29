// import EditForm from "@/app/_components/EditForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

async function GetUser(id: string) {
  const res = await fetch(`/api/users/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const user = await GetUser(id);
  console.log("User: ", user);

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

        <Suspense
          fallback={
            <p className='text-stone-800 font-bold text-2xl'>Loading...</p>
          }
        >
          {/* <EditForm} /> */}
        </Suspense>
      </div>
    </>
  );
}
