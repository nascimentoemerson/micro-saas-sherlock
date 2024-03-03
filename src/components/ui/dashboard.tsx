import Link from "next/link"
import { Key } from "react";
import { UrlObject } from "url";


const ACCESS_TOKEN = process.env.ACCESS_TOKEN; // Substitua Substitua pelo seu token de acesso real


// Função para capitalizar as primeiras letras de cada palavra
function capitalizeFirstLetters(string: string) {
    return string.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default async function Dashboard() {
    const response = await fetch('https://api.mercadolibre.com/trends/MLB?limit=200', {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    });
    if (!response.ok) {
        throw new Error('Erro ao obter os trends');
    }
    const data = await response.json();
    console.log(data.length)

    return (
        <div className="mt-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl" >
            <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Palavras-chave mais pesquisadas</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                {data.map((trend: { keyword: string; url: string | UrlObject; }, index: Key | null | undefined) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">{capitalizeFirstLetters(trend.keyword)}</h3>
                            <Link className="text-blue-500 hover:underline" href={trend.url}>
                                Ver mais
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600">Descrição breve sobre a tendência...</p>
                    </div>
                ))}
            </div>
        </div >
    );
}