import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import React from 'react'

export default function LoginForm() {
    const loginAction = async () => {
        "use server"
        await signIn("github", {
            redirectTo: "/"
        })
    }

    return (
        <form
            action={loginAction}
        >
            <Button type="submit"><Github className="size-5 mr-1"/> Logar com GitHub</Button>
        </form>
    )
}
