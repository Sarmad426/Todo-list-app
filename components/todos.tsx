"use client";
import { deleteTodo, updateTodo } from "@/actions/actions";
import TodoItem from "@/components/todoitem";
import { Todo } from "@prisma/client";
import toast from "react-hot-toast";

interface TodosProps {
  todos: Todo[];
}
export default function Todos({ todos }: TodosProps) {
  function toggleTodo(id: string, completed: boolean) {
    try {
      updateTodo(id, completed);
    } catch {
      toast.error("Something went wrong");
    }
  }
  async function handleDelete(id: string) {
    try {
      deleteTodo(id);
    } catch {
      toast.error("Something went wrong");
    }
  }
  return (
    <main className="text-center m-auto my-12">
      {todos.length > 0 ? (
        todos.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              handleDelete={handleDelete}
            />
          );
        })
      ) : (
        <p className="my-8 text-lg text-muted-foreground">No Tasks</p>
      )}
    </main>
  );
}
