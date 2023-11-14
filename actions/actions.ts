'use server'

import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";


export const getTodoList = async (): Promise<Todo[]> => {
    const todos = await prisma.todo.findMany();
    return todos;
}

export const handleNewTodo = async (title: string) => {
    const newTodo = await prisma.todo.create({
        data: {
            title,
        },
    });
    return newTodo;
}

export const deleteTodo = async (id: string) => {
    const deletedTodo = await prisma.todo.delete({
        where: {
            id,
        },
    });
    return deletedTodo;
}