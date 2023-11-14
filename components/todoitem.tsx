"use client";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
interface TodoProps {
  title: string;
  id: string;
  completed: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  handleDelete: (id: string) => void;
}
const TodoItem = ({
  id,
  title,
  completed,
  toggleTodo,
  handleDelete,
}: TodoProps) => {
  const router = useRouter();

  const deleteTodo = (id: string) => {
    try {
      handleDelete(id);
      router.refresh();
      toast.success("Todo deleted successfully.");
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="w-full m-5 px-2 grid grid-cols-2 gap-x-20 text-start lg:w-1/2 lg:text-center lg:mx-auto">
      <section>
        <input
          type="checkbox"
          className="peer cursor-pointer"
          defaultChecked={completed}
          id={id}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500 mx-2 text-sm lg:text-lg"
        >
          {title}
        </label>
      </section>
      <section>
        <button
          className="mx-5 rounded-md py-1 px-2 bg-gray-100 hover:bg-gray-300"
          onClick={() => deleteTodo(id)}
        >
          <Trash />
        </button>
      </section>
    </div>
  );
};

export default TodoItem;
