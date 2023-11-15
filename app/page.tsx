import { getCompletedTodo, getTodoList } from "@/actions/actions";
import TodoForm from "@/components/Form/todo-form";
import Todos from "@/components/todos";

export const revalidate = 0;

const Home = async () => {
  const todos = await getTodoList();
  const completedTodos = await getCompletedTodo();
  return (
    <main>
      <TodoForm />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-screen">
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-center text-gray-700">
            Pending Tasks
          </h3>
          <Todos todos={todos} />
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-center text-gray-700">
            Completed Tasks
          </h3>
          <Todos todos={completedTodos} />
        </div>
      </div>
    </main>
  );
};

export default Home;
