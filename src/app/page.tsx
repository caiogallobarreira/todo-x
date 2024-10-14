import { createTask, deleteTask, fetchAllTasks } from './actions';
import AddTaskForm from "./components/add-task-form";
import ListTasks from './components/list-tasks';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store'
export const revalidate = 1;

export default async function Home() {

  return (
    <div className="flex flex-col gap-4">
      <AddTaskForm handleCreate={createTask} />

      <div className="flex flex-col gap-2">
        <Suspense fallback={<h1>Carregando...</h1>}>
          <ListTasks fetchTasks={fetchAllTasks} handleDelete={deleteTask} />
        </Suspense>
      </div>
    </div>
  );
}
