'use server'
import { CreateTaskValidationSchema } from "@/lib/database/task";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTask = async (validatedTask: CreateTaskValidationSchema) => {
    try {
        const createdTask = await prisma.task.create({
            data: validatedTask,
        });
    
        revalidatePath("/");
        return createdTask;
    } catch (err) {
        console.log(err);
        return false;
    } 
};

export const deleteTask = async (id: number) => {
    try {
        await prisma.task.delete({
            where: {
                id,
            },
        });

        revalidatePath("/");
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};


export const fetchAllTasks = async () => {
    const tasks = await prisma.task.findMany();
    return tasks;
};