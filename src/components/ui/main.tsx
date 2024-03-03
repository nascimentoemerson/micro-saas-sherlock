import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRightIcon } from "./icon"

export default function MainContent() {
    return (
        <div className="grid gap-4 w-full max-w-5xl mx-auto lg:grid-cols-2 xl:grid-cols-3">
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Moda de Inverno</CardTitle>
                    <CardDescription>Explore os estilos de inverno mais recentes</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-end pb-4">
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-medium">Palavra-chave em alta</CardTitle>
                        <CardDescription className="text-sm">Moda de Inverno</CardDescription>
                    </div>
                    <Link className="flex items-center underline hover:no-underline ml-auto text-sm" href="#">
                        Ver
                        <ArrowRightIcon className="h-3 w-3 ml-1.5 not-italic" />
                    </Link>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Acessórios de Inverno</CardTitle>
                    <CardDescription>Explore os acessórios de inverno indispensáveis</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-end pb-4">
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-medium">Palavra-chave em alta</CardTitle>
                        <CardDescription className="text-sm">Acessórios de Inverno</CardDescription>
                    </div>
                    <Link className="flex items-center underline hover:no-underline ml-auto text-sm" href="#">
                        Ver
                        <ArrowRightIcon className="h-3 w-3 ml-1.5 not-italic" />
                    </Link>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Jantar de Natal</CardTitle>
                    <CardDescription>Encontre inspiração para suas refeições de Natal</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-end pb-4">
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-medium">Palavra-chave em alta</CardTitle>
                        <CardDescription className="text-sm">Jantar de Natal</CardDescription>
                    </div>
                    <Link className="flex items-center underline hover:no-underline ml-auto text-sm" href="#">
                        Ver
                        <ArrowRightIcon className="h-3 w-3 ml-1.5 not-italic" />
                    </Link>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Essenciais de Inverno</CardTitle>
                    <CardDescription>Prepare-se para o inverno com esses essenciais</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-end pb-4">
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-medium">Palavra-chave em alta</CardTitle>
                        <CardDescription className="text-sm">Essenciais de Inverno</CardDescription>
                    </div>
                    <Link className="flex items-center underline hover:no-underline ml-auto text-sm" href="#">
                        Ver
                        <ArrowRightIcon className="h-3 w-3 ml-1.5 not-italic" />
                    </Link>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Trabalho Remoto</CardTitle>
                    <CardDescription>Descubra um espaço de trabalho remoto funcional</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-end pb-4">
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-medium">Palavra-chave em alta</CardTitle>
                        <CardDescription className="text-sm">Trabalho Remoto</CardDescription>
                    </div>
                    <Link className="flex items-center underline hover:no-underline ml-auto text-sm" href="#">
                        Ver
                        <ArrowRightIcon className="h-3 w-3 ml-1.5 not-italic" />
                    </Link>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Bem-Estar & Saúde</CardTitle>
                    <CardDescription>Compre produtos para cuidar da sua saúde e bem-estar</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-end pb-4">
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-medium">Palavra-chave em alta</CardTitle>
                        <CardDescription className="text-sm">Bem-Estar & Saúde</CardDescription>
                    </div>
                    <Link className="flex items-center underline hover:no-underline ml-auto text-sm" href="#">
                        Ver
                        <ArrowRightIcon className="h-3 w-3 ml-1.5 not-italic" />
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
