'use server'
import { CreateTaskValidationSchema } from "@/lib/database/task";
import { revalidatePath } from "next/cache";
import { Task } from "@prisma/client";
import prisma from "@/lib/prisma";

export const createTask = async (validatedTask: CreateTaskValidationSchema) => {
    const create = await prisma.task.create({
        data: validatedTask,
    });

    revalidatePath("/");
    return create;
};

export const deleteTask = async (id: number) => {
    const deleted = await prisma.task.delete({
        where: {
            id,
        },
    });
    
    revalidatePath("/");
    return deleted;
};


export const fetchAllTasks = async (): Promise<Task[]> => {
    return await prisma.task.findMany();
};