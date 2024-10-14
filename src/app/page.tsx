import AddTaskForm from "./_components/add-task-form";
import ListTasks from './_components/list-tasks';

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <AddTaskForm />

      <div className="flex flex-col gap-2">
        <ListTasks />
      </div>
    </div>
  );
}
