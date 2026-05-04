import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export default async function TermoPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Aguarda os parâmetros e limpa a URL para garantir que o nome do arquivo bata
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug); 
  
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  // 2. Tela de erro amigável se não achar o arquivo
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-wiki-bg text-wiki-text-primary font-serif">
        <h1 className="text-3xl mb-4">Verbete "{slug}" não encontrado.</h1>
        <Link href="/" className="text-wiki-link hover:underline">← Voltar para o início</Link>
      </div>
    );
  }

  // 3. Se achou, lê e renderiza
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <div className="min-h-screen bg-wiki-bg text-wiki-text-primary font-serif antialiased">
      <header className="sticky top-0 bg-wiki-paper border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/wikiendum-logo.svg" alt="Wikiendum Logo" width={50} height={50} className="rounded shadow-sm cursor-pointer" />
            </Link>
            <span className="text-3xl font-semibold tracking-tight text-gray-900">
              Wiki<span className="font-thin text-wiki-text-secondary">endum</span>
            </span>
          </div>
          <nav className="flex gap-4 text-sm font-sans">
            <Link href="/" className="text-wiki-link hover:underline">Verbetes</Link>
            <Link href="/colaborar" className="text-wiki-link hover:underline">Colaborar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 mt-4 bg-wiki-paper shadow-sm rounded-lg border border-gray-100">
        <h1 className="text-4xl font-sans font-bold mb-6 text-wiki-text-primary">{data.termo}</h1>
        <div className="mb-12 text-lg leading-relaxed text-wiki-text-secondary">{content}</div>
        <div className="border-b border-gray-200 mb-10"></div>
        <h2 className="text-2xl font-sans font-semibold mb-8 text-wiki-text-primary">Definições da Literatura:</h2>
        <div className="space-y-8 font-sans">
          {/* @ts-ignore */}
          {data.definicoes?.map((def: any) => (
            <div key={def.id} className="border border-gray-100 p-8 rounded-xl bg-wiki-accent/50 shadow-inner">
              <blockquote className="italic mb-5 text-xl leading-relaxed text-gray-900 pl-4 border-l-4 border-wiki-link">"{def.texto_citacao}"</blockquote>
              <div className="text-sm text-wiki-text-secondary flex flex-col gap-2">
                <p>— <span className="font-semibold text-wiki-text-primary">{def.autor_citado}</span>, <em className="text-wiki-text-primary">{def.obra}</em> ({def.ano}), p. {def.pagina}.</p>
                <p className="mt-2 text-xs text-wiki-link">Enviado por: {def.colaborador_nome} (ORCID: {def.colaborador_orcid})</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* NOVO FOOTER COM GITHUB */}
      <footer className="py-12 px-6 max-w-6xl mx-auto text-sm text-wiki-text-secondary font-sans mt-12 border-t border-gray-200 flex flex-col items-center justify-center gap-5">
        <p>Este projeto é open-source. Colabore, adicione verbetes e melhore o código.</p>
        <a 
          href="https://github.com/Wennington123/Wikiendum" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#24292e] text-white rounded-lg hover:bg-[#1b1f23] transition-colors shadow-sm font-medium"
        >
          {/* Ícone SVG oficial do GitHub */}
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          Acessar Repositório
        </a>
      </footer>
    </div>
  );
}