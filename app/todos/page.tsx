import { getCompletedTodo, getTodoList } from "@/actions/actions";
import Todos from "@/components/todos";
import { buttonVariants } from "@/components/ui/button";
import logo from "@/public/logo.png";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const TodosPage = async () => {
  const todos = await getTodoList();
  const completedTodos = await getCompletedTodo();
  return (
    <div>
      <div className="mt-3 mb-5 flex items-center justify-center">
        <div>
          <Image src={logo} alt="Logo" className="w-16 rounded-full my-3" />
          <h2 className="text-3xl font-semibold my-4">Todo App</h2>
          <p className="my-3 text-muted-foreground">
            Be Productive by managing tasks efficiently.
          </p>
        </div>
        <div>
          <Link href="/" className={buttonVariants()}>
            Add New <PlusCircle className="ml-2" />
          </Link>
        </div>
      </div>
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
    </div>
  );
};

export default TodosPage;
