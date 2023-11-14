'use server'

import prisma from "@/lib/prismadb";

export const handleNewTodo = async (title: string) => {
    await prisma.todo.create({
        data: {
            title,
        },
    });
}