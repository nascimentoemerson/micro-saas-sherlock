"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"

export function AuthForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit((data) => {
        console.log(data)
    })
    return (
        <div key="1" className="flex items-center justify-center min-h-screen">
            <div className="mx-auto max-w-5xl px-4 space-y-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="hidden lg:flex items-center space-x-4 justify-center">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold">Bem-vindo de volta!</h1>
                            <p className="text-gray-500 dark:text-gray-400">Estamos felizes em te ver novamente.</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" placeholder="fulano@example.com" type="email" {...form.register('email')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" {...form.register('password')} />
                        </div>
                        <Button className="w-full" type="submit">Entrar com E-mail</Button>
                        <Button className="w-full">Entrar com Google</Button>
                        <Link className="text-sm underline text-center" href="#">
                            Esqueceu sua senha?
                        </Link>
                        <div className="text-center text-sm">
                            Não tem uma conta?
                            <Link className="underline" href="#">
                                Cadastre-se
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
