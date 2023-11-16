import TodoForm from "@/components/Form/todo-form";
import Image from "next/image";
import logo from "../public/logo.png";

const Home = async () => {
  return (
    <main>
      <div className="mt-3 mb-5 flex items-center justify-center">
        <Image src={logo} alt="Logo" className="w-16 rounded-full" />
      </div>
      <TodoForm />
    </main>
  );
};

export default Home;
