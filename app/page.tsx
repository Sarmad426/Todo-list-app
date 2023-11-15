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
      <div className="flex items-center justify-center gap-12 flex-wrap">
        <div className="lg:w-1/3 md:w-2/5 w-[95%] py-4 px-2 overflow-scroll no-scrollbar">
          <h3 className="text-2xl font-semibold text-center text-gray-700">
            Pending Tasks
          </h3>
          <Todos todos={todos} />
        </div>
        <div className="lg:w-1/3 md:w-2/5 w-[95%] py-4 px-2 overflow-scroll no-scrollbar">
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
