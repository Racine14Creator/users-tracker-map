import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navLinks = [
    { id: 1, name: "Users", href: "/" },
    { id: 2, name: "Profile", href: "/profile" },
    { id: 3, name: "Add Users", href: "/add-user" },
  ];

  return (
    <div className='border-b'>
      <nav className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4  h-[10vh] items-center'>
        <div className='col-span-1'>
          <h2 className='font-bold text-2xl text-primary'>CRUD APP</h2>
        </div>
        <div className='col-span-2'>
          <ul className='flex flex-row items-center gap-5'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className='font-bold hover:bg-muted-foreground duration-100 px-5 py-3 rounded-md'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-span-1'>
          <div className='flex justify-end'>
            <Avatar>
              <AvatarImage src='https://avatars.githubusercontent.com/u/148460524?v=4' />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </div>
  );
}
