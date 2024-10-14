import React from 'react'
import TaskCard from './task-card'
import { Task } from '@prisma/client';

interface Props {
    handleDelete: (id: number) => void;
    fetchTasks: () => Promise<Task[]>;
}

export default async function ListTasks({ handleDelete, fetchTasks}: Props) {
    const tasks = await fetchTasks();

    return (
        <>
            {tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
            ))}
        </>
    )
}
