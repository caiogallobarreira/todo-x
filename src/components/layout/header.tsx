import React from 'react'
import { ModeToggle } from '../theme/mode-toggle'

export default function Header() {
  return (
    <header className="h-24 px-8 flex items-center justify-between border border-b-2">
        <h1 className='text-2xl font-bold'>TodoX</h1>
        <ModeToggle/>
    </header>
  )
}
