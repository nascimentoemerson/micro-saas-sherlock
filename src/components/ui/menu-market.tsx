import { Button } from "@/components/ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { ChevronDownIcon } from "./icon"; // Mantenha apenas o ícone de seta para baixo

export default function MenuMarket() {
    return (
        <div className="inline-block text-sm">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className="w-full justify-start text-left font-normal rounded-none border-0 gap-2.5 px-2.5 py-1.5" // Ajuste o espaçamento vertical
                        id="market-analysis-menu"
                        size="default"
                        variant="ghost"
                    >
                        Análise de Mercado
                        <ChevronDownIcon className="ml-auto h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="mt-1 w-56"> {/* Reduza um pouco a largura */}
                    <div>
                        <div className="py-2 px-3 hover:bg-gray-100 cursor-pointer"> {/* Adicione um efeito de hover e um cursor de ponteiro */}
                            Busca de Produto
                        </div>
                        <div className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                            Localizador de Vendedor
                        </div>
                        <div className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                            Análise de Concorrentes
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
