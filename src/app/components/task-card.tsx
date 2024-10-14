"use client"

import React from 'react'
import { StickyNote } from 'lucide-react';
import { Task } from '@prisma/client';
import { Button } from '@/components/ui/button';


type Props = {
    task: Task;
    handleDelete: (id: number) => void;
}

export default function TaskCard(props: Props): JSX.Element {
    return (
        <div className='rounded bg-muted/40 border p-4 pl-6 flex justify-between items-center gap-2'>
            <div className='flex gap-2 items-center select-none'>
                <StickyNote size={20} />
                <p>{props.task.description}</p>
            </div>
            <Button variant={"destructive"} onClick={() => props.handleDelete(props.task.id)}>Deletar</Button>
        </div>
    )
}
