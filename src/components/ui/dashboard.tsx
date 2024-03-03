import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRightIcon } from "./icon"
import Image from "next/image";

// Simulação dos dados da API do Mercado Livre
const trendData = [
    {
        "keyword": "bancada",
        "url": "https://lista.mercadolivre.com.br/bancada"
    },
    {
        "keyword": "roda skate",
        "url": "https://lista.mercadolivre.com.br/roda-skate"
    },
    {
        "keyword": "toca descartavel",
        "url": "https://lista.mercadolivre.com.br/toca-descartavel"
    },
    {
        "keyword": "touca para luzes",
        "url": "https://lista.mercadolivre.com.br/touca-para-luzes"
    },
    {
        "keyword": "touca descartavel",
        "url": "https://lista.mercadolivre.com.br/touca-descartavel"
    },
    {
        "keyword": "touca nero",
        "url": "https://lista.mercadolivre.com.br/touca-nero"
    },
    {
        "keyword": "toca de setim",
        "url": "https://lista.mercadolivre.com.br/toca-de-setim"
    },
    {
        "keyword": "touca de banho",
        "url": "https://lista.mercadolivre.com.br/touca-de-banho"
    },
    {
        "keyword": "touca de cetim grande",
        "url": "https://lista.mercadolivre.com.br/touca-de-cetim-grande"
    },
    {
        "keyword": "touca termica eletrica",
        "url": "https://lista.mercadolivre.com.br/touca-termica-eletrica"
    },
    {
        "keyword": "pentax",
        "url": "https://lista.mercadolivre.com.br/pentax"
    },
    {
        "keyword": "detector de metais",
        "url": "https://lista.mercadolivre.com.br/detector-de-metais"
    },
    {
        "keyword": "scanner de parede",
        "url": "https://lista.mercadolivre.com.br/scanner-de-parede"
    },
    {
        "keyword": "detector de metais profissional",
        "url": "https://lista.mercadolivre.com.br/detector-de-metais-profissional"
    },
    {
        "keyword": "detector de ouro",
        "url": "https://lista.mercadolivre.com.br/detector-de-ouro"
    },
    {
        "keyword": "equinox 800",
        "url": "https://lista.mercadolivre.com.br/equinox-800"
    },
    {
        "keyword": "detectorismo",
        "url": "https://lista.mercadolivre.com.br/detectorismo"
    },
    {
        "keyword": "minelab",
        "url": "https://lista.mercadolivre.com.br/minelab"
    },
    {
        "keyword": "detector de metais portatil",
        "url": "https://lista.mercadolivre.com.br/detector-de-metais-portatil"
    },
    {
        "keyword": "gold monster 1000",
        "url": "https://lista.mercadolivre.com.br/gold-monster-1000"
    },
    {
        "keyword": "detector de cano agua",
        "url": "https://lista.mercadolivre.com.br/detector-de-cano-agua"
    },
    // Adicione mais itens conforme necessário...
];

// Função para capitalizar as primeiras letras de cada palavra
function capitalizeFirstLetters(string: string) {
    return string.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function Dashboard() {
    return (
        <div className="mt-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Palavras-chave mais pesquisadas</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                {trendData.map((trend, index) => (
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
        </div>
    );
}