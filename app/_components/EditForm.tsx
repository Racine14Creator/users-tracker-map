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

interface Inputs {
  fullname: string;
  email: string;
  dob: string;
  sex: string;
  salary: number;
}

export default function EditForm({
  data,
}: {
  data: {
    fullname: string;
    email: string;
    dob: string;
    sex: string;
    salary: number;
  };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullname: data.fullname,
      email: data.email,
      dob: data.dob,
      sex: data.sex,
      salary: data.salary,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
        <div className='col-span-2'>
          <Label htmlFor='fullname'>Full Name</Label>
          <Input
            type='text'
            {...register("fullname", { required: "Full name is required" })}
            placeholder='Full Name'
          />
          {errors.fullname && (
            <p className='text-red-500'>{errors.fullname.message}</p>
          )}
        </div>

        <div className='col-span-1'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            {...register("email", { required: "Email is required" })}
            placeholder='Email'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <div className='col-span-1'>
          <Label htmlFor='dob'>Date of Birth</Label>
          <Input
            type='date'
            {...register("dob", { required: "Date of birth is required" })}
            placeholder='Date of Birth'
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
            defaultValue={data.sex}
            onValueChange={() =>
              register("sex", { required: "Sex is required" })
            }
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select Gender' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Male'>Male</SelectItem>
              <SelectItem value='Female'>Female</SelectItem>
            </SelectContent>
          </Select>
          {errors.sex && <p className='text-red-500'>{errors.sex.message}</p>}
        </div>

        <div className='col-span-1'>
          <Button type='submit'>Save</Button>
        </div>
      </div>
    </form>
  );
}
