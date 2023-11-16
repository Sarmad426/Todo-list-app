import TodoForm from "@/components/Form/todo-form";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

const Home = async () => {
  return (
    <main>
      <div className="mt-3 mb-5 flex items-center justify-center gap-x-32">
        <Image src={logo} alt="Logo" className="w-16 rounded-full" />
        <Link href="/todos" className={buttonVariants()}>
          View Todos <EyeIcon className="ml-2" />
        </Link>
      </div>
      <TodoForm />
    </main>
  );
};

export default Home;
