import { getCompletedTodo, getTodoList } from "@/actions/actions";
import TodoForm from "@/components/Form/todo-form";
import Todos from "@/components/todos";
import Image from "next/image";
import logo from "../public/logo.png";

export const revalidate = 0;

const Home = async () => {
  const todos = await getTodoList();
  const completedTodos = await getCompletedTodo();
  return (
    <main>
      <div className="mt-3 mb-5 flex items-center justify-center">
        <Image src={logo} alt="Logo" className="w-16 rounded-full" />
      </div>
      <TodoForm />
      <div className="flex items-center justify-center gap-16 flex-wrap">
        <div className="lg:w-1/3 md:w-2/5 w-[95%] p-6 overflow-scroll no-scrollbar border h-[25rem]">
          <h3 className="text-2xl font-semibold text-center text-gray-700">
            Pending Tasks
          </h3>
          <Todos todos={todos} />
        </div>
        <div className="lg:w-1/3 md:w-2/5 w-[95%] p-6 overflow-scroll no-scrollbar border h-[25rem]">
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
