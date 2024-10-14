import React from 'react'
import TaskCard from './task-card'
import { fetchAllTasks } from '../actions';

export default async function ListTasks() {
    const tasks = await fetchAllTasks();
    return (
        <>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </>
    )
}
