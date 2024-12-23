import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ProfilePage() {
  return (
    <div className='max-w-7xl mx-auto py-10 px-2 md:p-2 lg:p-0 flex flex-col gap-5'>
      <h2 className='font-extrabold text-4xl'>Profile</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus placeat,
        repudiandae recusandae suscipit delectus cupiditate sapiente ipsa animi
        hic ipsum facilis distinctio repellendus modi culpa laudantium
        molestiae. Culpa, doloremque harum.
      </p>
      <Button asChild>
        <Link href='#' className='w-fit'>
          Edit Profile
        </Link>
      </Button>
    </div>
  );
}
