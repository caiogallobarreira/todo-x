"use client"

import { useState } from "react";
import AddTaskForm from "./add-task-form";
import { Task } from "@/lib/schemas/task.schema";


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };


  return (
    <div className="">
      <AddTaskForm handleSubmit={addTask} />

      {JSON.stringify(tasks)}
    </div>
  );
}
