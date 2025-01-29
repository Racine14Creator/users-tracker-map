"use client";

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
import { Inputs } from "@/utils/types/user-type";
import { useRouter } from "next/navigation";

export default function Form() {
  const [serverError, setServerError] = React.useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const password = "Password";
    data = { ...data, password };

    try {
      const response = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Parsez la réponse du serveur

      if (!response.ok) {
        // Si la réponse n'est pas OK, affichez l'erreur
        setServerError(result.error || "Une erreur s'est produite");
      } else {
        // Si tout va bien, réinitialisez l'erreur et affichez un message de succès
        setServerError(null);
        // console.log("Utilisateur créé avec succès :", result.data);
        router.refresh();
        router.push("/");
        // alert("Utilisateur créé avec succès !");
      }
    } catch (error) {
      console.error("Something went wrong", error);
      setServerError("Something went wrong");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method='post'>
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
              {...register("salary", {
                valueAsNumber: true,
                validate: (value) =>
                  !isNaN(value) || "Salary must be a valid number",
                required: "Salary is required",
              })}
              placeholder='Salary'
              min={0}
            />
            {errors.salary && (
              <p className='text-red-500'>{errors.salary.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label htmlFor='sex'>Sex</Label>
            <Controller
              name='sex'
              control={control}
              defaultValue=''
              rules={{ required: "Sex is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select the gender' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Male'>Male</SelectItem>
                    <SelectItem value='Female'>Female</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.sex && <p className='text-red-500'>{errors.sex.message}</p>}
          </div>
          <div className='col-span-1'>
            <Button type='submit'>Register</Button>
          </div>
          {serverError && (
            <div className='col-span-4 mx-auto'>
              <p className='text-red-500 bg-red-100 rounded-md p-2'>
                {serverError}
              </p>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
