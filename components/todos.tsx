import TodoItem from "@/components/todoitem";
import Link from "next/link";
import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";

async function getTodos() {
  const tasks = await prisma.todo.findMany();
  return tasks;
}
export default async function Todos() {
  const todos: Todo[] = await getTodos();
  async function toggleTodo(id: string, completed: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { completed } });
  }
  async function handleDelete(id: string) {
    "use server";
    await prisma.todo.delete({ where: { id } });
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
        <h2 className="my-8 text-2xl font-medium">No Tasks</h2>
      )}
    </main>
  );
}
