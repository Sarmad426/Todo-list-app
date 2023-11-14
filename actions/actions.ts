'use server'

import prisma from "@/lib/prismadb";
import toast from "react-hot-toast";


export const handleNewTodo = async (title: string) => {
    await prisma.todo.create({
        data: {
            title,
        },
    });
}