"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthForm() {
    return (
        <form key="1" className="flex items-center justify-center min-h-screen">
            <div className="mx-auto max-w-5xl px-4 space-y-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="hidden lg:flex items-center space-x-4 justify-center">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold">Bem-vindo de volta!</h1>
                            <p className="text-gray-500 dark:text-gray-400">Estamos felizes em te ver novamente.</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" placeholder="m@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button className="w-full">Entrar com E-mail</Button>
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
                    </div>
                </div>
            </div>
        </form>
    );
}