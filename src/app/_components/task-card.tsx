"use client"

import React, { useState } from 'react'
import { StickyNote, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Task } from '@prisma/client';
import { deleteTask } from '../actions';
import toast from 'react-hot-toast';


type Props = {
    task: Task;
}

export default function TaskCard({ task }: Props): JSX.Element {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleDelete = () => {
        setButtonDisabled(true);
        deleteTask(task.id).then(() => {
            toast.success("Tarefa excluida com sucesso!");
        }).catch((e) => {
            toast.error(e.message)
            setButtonDisabled(false);
        })
    }

    return (
        <div className='rounded bg-muted/40 border p-4 pl-6 flex justify-between items-center gap-2'>
            <div className='flex gap-2 items-center select-none'>
                <StickyNote size={20} />
                <p>{task.description}</p>
            </div>
            <Button 
                aria-disabled={buttonDisabled}
                disabled={buttonDisabled}
                variant={"destructive"}
                onClick={handleDelete}
                size={'icon'}
            >
                <Trash size={18} />
            </Button>
        </div>
    )
}
