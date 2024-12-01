import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function Form() {
  return (
    <>
      <form action='' method='post'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
          <div className='col-span-2'>
            <Label htmlFor='fullname'>Full name</Label>
            <Input type='text' placeholder='Full name' />
          </div>
          <div className='col-span-1'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' placeholder='email' />
          </div>
          <div className='col-span-1'>
            <Label htmlFor='dob'>Date of Birth</Label>
            <Input type='date' placeholder='Date of birth' />
          </div>
          <div className='col-span-2'>
            <Label htmlFor='salary'>Salary</Label>
            <Input type='number' placeholder='Salary' min={0} />
          </div>
          <div className='col-span-2'>
            <Label htmlFor='sex'>Sex</Label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Theme' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='select'>Select the gender</SelectItem>
                <SelectItem value='Male'>Male</SelectItem>
                <SelectItem value='Female'>Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='col-span-1'>
            <Button type='submit'>Register</Button>
          </div>
        </div>
      </form>
    </>
  );
}
