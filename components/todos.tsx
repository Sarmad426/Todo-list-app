"use client";

import TodoItem from "@/components/todoitem";
import { Todo } from "@prisma/client";

interface TodosProps {
  todos: Todo[];
}
export default function Todos({ todos }: TodosProps) {
  return (
    <main className="my-8">
      {todos.length > 0 ? (
        todos.map((todo: Todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })
      ) : (
        <p className="my-8 text-lg text-muted-foreground text-center">
          No Tasks
        </p>
      )}
    </main>
  );
}
