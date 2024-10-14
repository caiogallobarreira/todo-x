import { z } from "zod";

// Type

// CRUD
export const createTask = async (validatedTask: CreateTaskValidationSchema) => {
    console.log(validatedTask);
} 

// Validation

export const createTaskValidationSchema = z.object({
    description: z.string().min(1).max(255),
});

export type CreateTaskValidationSchema = z.infer<typeof createTaskValidationSchema>;
