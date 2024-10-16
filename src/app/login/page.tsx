import React from 'react'
import LoginForm from './_components/login-form'
import { Metadata } from 'next';
import { LogIn } from 'lucide-react';

export const metadata: Metadata = {
    title: "TodoX - Login"
};

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-8">
        <h1 className='text-3xl font-bold flex items-center gap-2'>
            <LogIn size={30} strokeWidth={3} /> 
            Login
        </h1>
        <LoginForm/>
    </div>
  )
}
