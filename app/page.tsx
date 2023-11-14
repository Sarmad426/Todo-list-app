"use server";

import { getTodoList } from "@/actions/actions";
import TodoForm from "@/components/Form/todo-form";
import Todos from "@/components/todos";
import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";
import React from "react";

const Home = async () => {
  const todos = await getTodoList();
  return (
    <main>
      <TodoForm />
      <Todos todos={todos} />
    </main>
  );
};

export default Home;
