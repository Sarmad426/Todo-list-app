import TodoForm from "@/components/Form/todo-form";
import Todos from "@/components/todos";
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
      <Todos />
    </main>
  );
};

export default Home;
