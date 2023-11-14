import { deleteTodo } from "@/actions/actions";
import TodoItem from "@/components/todoitem";
import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";
import toast from "react-hot-toast";

interface TodosProps {
  todos: Todo[];
}
export default async function Todos({ todos }: TodosProps) {
  async function toggleTodo(id: string, completed: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { completed } });
  }
  async function handleDelete(id: string) {
    try {
      deleteTodo(id);
      toast.success("Todo deleted successfully");
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
              handleDelete={() => handleDelete(todo.id)}
            />
          );
        })
      ) : (
        <h2 className="my-8 text-2xl font-medium">No Tasks</h2>
      )}
    </main>
  );
}
