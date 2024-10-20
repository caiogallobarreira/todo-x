"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateTaskValidationSchema, createTaskValidationSchema } from '@/lib/database/task';
import { createTask } from '../actions';
import toast from 'react-hot-toast';
import { Plus } from 'lucide-react';


export default function AddTaskForm(): JSX.Element {
    const form = useForm<CreateTaskValidationSchema>({
        resolver: zodResolver(createTaskValidationSchema),
        defaultValues: {
            description: '',
        }
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);


    const handleSubmit = (validatedTask: CreateTaskValidationSchema) => {
        setButtonDisabled(true);
        createTask(validatedTask).then(() => {
            toast.success("Tarefa criada com sucesso!")
            setButtonDisabled(false);
            form.reset();
        }).catch((e) => {
            toast.error(e.message)
            setButtonDisabled(false);
        })
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

                        <Button 
                            type="submit"
                            disabled={buttonDisabled}
                            aria-disabled={buttonDisabled}
                        >
                            <Plus size={14} className="mr-2"/>
                            Adicionar
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}