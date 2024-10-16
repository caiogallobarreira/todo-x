import React from 'react'
import { ModeToggle } from '../theme/mode-toggle'
import { auth, signOut } from '@/auth';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { LogOut } from 'lucide-react';

export default async function Header() {
  const session = await auth();

  const date = new Date();

  const signedInElements = session != null && session.user ? (
    <>
      <div className='flex items-center gap-3'>
        <Avatar>
          <AvatarImage src={session.user.image ? session.user.image : ""} />
          <AvatarFallback>{session.user.name ? session.user.name[0] : "-"}</AvatarFallback>
        </Avatar>
        <div>
          <p className='font-bold'>{session.user.name}</p>
          <p className='text-xs'>{date.toLocaleString("pt-BR")}</p>
        </div>
      </div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button><LogOut size={14} className='mr-1'/> Sair</Button>
      </form>
    </>
  ) : <></>;

  return (
    <header className="h-24 px-8 flex items-center justify-between border border-b-2">
        <h1 className='text-2xl font-bold'>TodoX</h1>
        <div className='flex items-center gap-4'>
          { signedInElements }
          <ModeToggle/>
        </div>
    </header>
  )
}
