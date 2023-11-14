"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { handleNewTodo } from "@/actions/actions";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleTodo = (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      handleNewTodo(title);
      router.refresh();
      toast.success("Todo added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-6 py-4">
      <h2 className="text-3xl font-semibold my-4">Todo App</h2>
      <p className="my-3 text-muted-foreground">Remember it for future</p>
      <form
        onSubmit={handleTodo}
        className="flex items-center justify-center w-full gap-6 my-6"
      >
        <Input
          type="text"
          name="todo"
          placeholder="New Task Here..."
          className="w-full lg:w-1/3 md:w-1/2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          required
        />
        <Button size="sm" disabled={loading}>
          <SendHorizonal />
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
