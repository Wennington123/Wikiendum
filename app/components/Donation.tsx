"use client";

import { useState } from "react";
import { Coffee, X, QrCode, CreditCard } from "lucide-react";

export default function Donation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("pix");

  return (
    <>
      {/* Botão Principal ajustado para alinhar perfeitamente com o do GitHub */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-amber-900 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors duration-200 shadow-sm"
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
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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

            <div className="flex gap-2 mb-4 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setActiveTab("pix")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "pix" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <QrCode size={16} />
                Pix
              </button>
              <button
                onClick={() => setActiveTab("cartao")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "cartao" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <CreditCard size={16} />
                Cartão
              </button>
            </div>

            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 text-center">
              {activeTab === "pix" ? (
                <div>
                  <p className="text-sm text-gray-700 mb-4">Escaneie o QR Code ou copie a chave Pix abaixo:</p>
                  
                  {/* Container da imagem do QR Code atualizado */}
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img 
                      src="/qrcode-pix.png" 
                      alt="QR Code Pix para doação" 
                      className="w-full h-full object-contain rounded-lg shadow-sm" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <code className="block p-2 text-xs bg-white border border-gray-200 rounded text-left break-all">
                      (74) 98821-7793
                    </code>
                  </div>
                </div>
              ) : (
                <div className="py-4">
                  <p className="text-sm text-gray-700 mb-4">
                    Aceitamos doações através de plataformas parceiras.
                  </p>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Acessar Plataforma de Doação
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}