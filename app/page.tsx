import TodoForm from "@/components/Form/todo-form";
import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";
import React from "react";

const getTodos = async (): Promise<Todo[]> => {
  const todos = await prisma.todo.findMany();
  return todos;
};
const Home = async () => {
  const todos = await getTodos();
  return (
    <main>
      <TodoForm />
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-3xl font-semibold">Tasks Here</h3>
        <div className="my-6">{todos.map((todo) => todo.title)}</div>
      </div>
    </main>
  );
};

export default Home;
