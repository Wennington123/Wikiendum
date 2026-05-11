"use client";

import { useState } from "react";
import { Coffee, X } from "lucide-react";

export default function Donation() {
  const [isOpen, setIsOpen] = useState(false);
  const [valorSugerido, setValorSugerido] = useState<number | null>(null);

  const valores = [5, 15, 20];

  return (
    <>
      {/* Botão Principal ajustado para alinhar perfeitamente com o do GitHub */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-amber-900 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors duration-200 shadow-sm cursor-pointer"
      >
        <Coffee size={18} />
        Compre-me um café
      </button>

      {/* Modal que abre ao clicar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 text-amber-600 rounded-full">
                <Coffee size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Apoie o Wikiendum</h3>
              <p className="mt-2 text-sm text-gray-600">
                Manter um site tem alguns custos. Contribua com o meu projeto doando um valor simbólico!
              </p>
            </div>

            {/* Sugestões de Valores */}
            <div className="mb-6 text-center">
              <p className="text-sm font-medium text-gray-700 mb-3">Sugestão de contribuição:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {valores.map((valor) => (
                  <button
                    key={valor}
                    onClick={() => setValorSugerido(valor)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all ${
                      valorSugerido === valor
                        ? "bg-amber-400 text-amber-900 border border-amber-500 shadow-sm"
                        : "bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200"
                    }`}
                  >
                    R$ {valor}
                  </button>
                ))}
              </div>
            </div>

            {/* Área do Pix */}
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 text-center">
              <p className="text-sm text-gray-700 mb-4">Escaneie o QR Code ou copie a chave Pix abaixo:</p>
              
              {/* Container da imagem do QR Code */}
              <div className="w-32 h-32 mx-auto mb-4">
                <img 
                  src="/qrcode-pix.png" 
                  alt="QR Code Pix para doação" 
                  className="w-full h-full object-contain rounded-lg shadow-sm" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <code className="block p-2 text-sm font-mono font-medium bg-white border border-gray-200 rounded text-center select-all cursor-text text-gray-800">
                  (74) 98821-7793
                </code>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}