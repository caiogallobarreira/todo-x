import { z } from "zod";

export const taskSchema = z.object({
    description: z.string().min(1).max(255),
});

export type Task = z.infer<typeof taskSchema>;
