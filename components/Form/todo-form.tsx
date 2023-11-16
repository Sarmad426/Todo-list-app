"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { handleNewTodo } from "@/actions/actions";
import toast from "react-hot-toast";

type FormInputs = {
  todo: string;
};

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    try {
      setLoading(true);
      handleNewTodo(data.todo);
      router.refresh();
      toast.success("Todo added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 px-4 py-8 border rounded shadow">
      <h2 className="text-3xl font-semibold my-4">Todo App</h2>
      <p className="my-3 text-muted-foreground">
        Be Productive by managing tasks efficiently.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4">
          <input
            type="text"
            id="todoText"
            {...register("todo", { required: "Todo is required" })}
            className={`flex-1 p-2 border rounded-l focus:outline-none disabled:opacity-60 ${
              errors.todo ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your todo..."
            disabled={loading}
          />

          <Button
            size="sm"
            type="submit"
            disabled={loading}
            className="disabled:opacity-60"
          >
            <SendHorizonal size={20} />
          </Button>
        </div>
        <p className="text-red-500 text-xs mt-1">
          {Boolean(errors.todo) && errors?.todo?.message}
        </p>
      </form>
    </div>
  );
};

export default TodoForm;
