"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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

// interface EditPageProps {
//   edit: string;
// }

interface Inputs {
  id: string;
  fullname: string;
  email: string;
  password: string;
  dob: string;
  sex: string;
  salary: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
          <div className='col-span-2'>
            <Label htmlFor='fullname'>Full name</Label>
            <Input
              type='text'
              {...register("fullname", { required: "Full name is required" })}
              placeholder='Full name'
            />
            {errors.fullname && (
              <p className='text-red-500'>{errors.fullname.message}</p>
            )}
          </div>
          <div className='col-span-1'>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              placeholder='email'
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='col-span-1'>
            <Label htmlFor='dob'>
              Date of Birth <span className='text-red-500'>*</span>
            </Label>
            <Input
              type='date'
              placeholder='Date of birth'
              {...register("dob", { required: "Date of birth is required" })}
            />
            {errors.dob && <p className='text-red-500'>{errors.dob.message}</p>}
          </div>
          <div className='col-span-2'>
            <Label htmlFor='salary'>Salary</Label>
            <Input
              type='number'
              {...register("salary", { required: "Salary is required" })}
              placeholder='Salary'
              min={0}
            />
            {errors.salary && (
              <p className='text-red-500'>{errors.salary.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label htmlFor='sex'>Sex</Label>
            <Select
              defaultValue='select'
              {...register("sex", { required: "Sex is required" })}
            >
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
