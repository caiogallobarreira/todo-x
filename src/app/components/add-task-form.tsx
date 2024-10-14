"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateTaskValidationSchema, createTaskValidationSchema } from '@/lib/database/task';

type Props = {
    handleCreate: (task: CreateTaskValidationSchema) => void;
}

export default function AddTaskForm(props: Props): JSX.Element {
    const form = useForm<CreateTaskValidationSchema>({
        resolver: zodResolver(createTaskValidationSchema),
        defaultValues: {
            description: '',
        }
    })

    const handleSubmit = (validatedTask: CreateTaskValidationSchema) => {
        props.handleCreate(validatedTask);
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
