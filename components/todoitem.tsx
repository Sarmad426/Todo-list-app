"use client";
import { deleteTodo, updateTodo } from "@/actions/actions";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
interface TodoProps {
  title: string;
  id: string;
  completed: boolean;
}
const TodoItem = ({ id, title, completed }: TodoProps) => {
  const router = useRouter();

  const handleDelete = (id: string) => {
    try {
      deleteTodo(id);
      router.refresh();
      toast.success("Todo deleted successfully.");
    } catch {
      toast.error("Something went wrong.");
    }
  };
  function toggleTodo(id: string, completed: boolean) {
    try {
      updateTodo(id, completed);
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="flex items-center justify-normal gap-12">
      <section className="flex-1 my-4">
        <input
          type="checkbox"
          className="peer cursor-pointer"
          defaultChecked={completed}
          id={id}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500 mx-4 text-sm lg:text-lg"
        >
          {title}
        </label>
      </section>
      <section>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => handleDelete(id)}
        >
          <Trash />
        </Button>
      </section>
    </div>
  );
};

export default TodoItem;
