"use client";
import Image from "next/image";
// import trashIcon from "./delete.svg";
import { useRouter } from "next/navigation";
import { Trash, TrashIcon } from "lucide-react";

interface TodoProps {
  title: string;
  id: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  handleDelete: (id: string) => void;
}
const TodoItem = ({
  id,
  title,
  complete,
  toggleTodo,
  handleDelete,
}: TodoProps) => {
  const router = useRouter();
  return (
    <div className="w-full m-5 px-2 grid grid-cols-2 gap-x-20 text-start lg:w-1/2 lg:text-center lg:mx-auto">
      <section>
        <input
          type="checkbox"
          className="peer cursor-pointer"
          defaultChecked={complete}
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
          onClick={(e) => {
            handleDelete(id);
            return router.refresh();
          }}
        >
          <TrashIcon />
        </button>
      </section>
    </div>
  );
};

export default TodoItem;
