import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export default function TermoPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return <div className="p-20 text-center text-2xl font-serif">Verbete não encontrado.</div>;
  }

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
            <Link href="#" className="text-wiki-link hover:underline">Colaborar</Link>
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

      <footer className="py-12 px-6 max-w-6xl mx-auto text-xs text-wiki-text-secondary font-sans mt-10 text-center">
        Este projeto é open-source. Colabore no GitHub.
      </footer>
    </div>
  );
}