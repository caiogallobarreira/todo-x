"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Task, taskSchema } from '@/lib/schemas/task.schema';


type Props = {
    handleSubmit: (task: Task) => void;
}

export default function AddTaskForm(props: Props): JSX.Element {
    const form = useForm<Task>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            description: '',
        }
    })

    const handleSubmit = (values: Task) => {
        props.handleSubmit(values);
        form.reset();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Criar task</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className='space-y-4'
                    >
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Adicionar</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
