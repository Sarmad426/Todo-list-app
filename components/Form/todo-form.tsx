"use client";

import { toast } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Enter Task" }),
});

type formSchemaType = z.infer<typeof formSchema>;

const TodoForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: formSchemaType) => {
    try {
      setLoading(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form className="" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="store-name">New Task</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Task Name"
                  id="task-name"
                  {...field}
                  //   className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-5/6"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center w-full space-x-4 mt-4">
          <Button disabled={loading} type="submit">
            <SendHorizonal className="w-4 h-4 shrink-0 inline-block" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TodoForm;
