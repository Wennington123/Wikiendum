import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home() {
  // 1. Aponta para o arquivo que criamos
  const filePath = path.join(process.cwd(), 'content', 'laicidade.md');
  
  // 2. Lê o arquivo de texto puro
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // 3. Usa o gray-matter para separar as variáveis (data) do texto principal (content)
  const { data, content } = matter(fileContent);

  return (
    <main className="min-h-screen p-10 bg-gray-950 text-gray-100 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 border-b border-gray-700 pb-2">
          {data.termo}
        </h1>
        
        <div className="mb-10 text-lg leading-relaxed text-gray-300">
          {content}
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Definições da Literatura:</h2>
        
        <div className="space-y-6">
          {/* O ts-ignore abaixo evita que o TypeScript reclame do formato do map nesta fase inicial */}
          {/* @ts-ignore */}
          {data.definicoes.map((def) => (
            <div key={def.id} className="border border-gray-800 p-6 rounded-xl bg-gray-900 shadow-md">
              <p className="italic mb-4 text-xl text-gray-200">"{def.texto_citacao}"</p>
              
              <div className="text-sm text-gray-400">
                <p>
                  — <span className="font-semibold text-gray-300">{def.autor_citado}</span>, <em>{def.obra}</em> ({def.ano}), p. {def.pagina}.
                </p>
                <p className="mt-3 text-xs text-indigo-400">
                  Enviado por: {def.colaborador_nome} (ORCID: {def.colaborador_orcid})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}