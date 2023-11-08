import TodoForm from "@/components/Form/todo-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-screen">
      <TodoForm />
    </main>
  );
}
