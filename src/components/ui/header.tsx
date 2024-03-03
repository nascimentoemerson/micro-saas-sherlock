import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Package2Icon } from "./icon"


export default function Header(){
    return (
        <header className="flex h-14 lg:h-[60px] items-center justify-end gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
                <Package2Icon className="h-6 w-6" />
                <span className="sr-only">Início</span>
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        className="rounded-full border border-gray-200 w-15 h-15 dark:border-gray-800"
                        size="icon"
                        variant="ghost"
                    >
                        <Image
                            alt="Avatar"
                            className="rounded-full"
                            height="50"  // Ajuste o tamanho desejado aqui
                            src="/avatar.jpeg"
                            style={{
                                aspectRatio: "1/1",  // Manter a proporção 1:1
                                objectFit: "cover",
                            }}
                            width="50"  // Ajuste o tamanho desejado aqui
                        />
                        <span className="sr-only">Alternar menu do usuário</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Configurações</DropdownMenuItem>
                    <DropdownMenuItem>Suporte</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sair</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}