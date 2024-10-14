import { createTask, deleteTask, fetchAllTasks } from './actions';
import AddTaskForm from "./components/add-task-form";
import TaskCard from './components/task-card';
import { Task } from '~/';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store'
export const revalidate = 1;

export default async function Home() {
  const tasks: Task[] = await fetchAllTasks();

  return (
    <div className="flex flex-col gap-4">
      <AddTaskForm handleCreate={createTask} />

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={deleteTask}/>
        ))}
      </div>
    </div>
  );
}
