import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.existsSync(contentDir) ? fs.readdirSync(contentDir) : [];

  const verbetes = files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      termo: data.termo,
      quantidade: data.definicoes?.length || 0
    };
  });

  return (
    <div className="min-h-screen bg-wiki-bg text-wiki-text-primary font-serif antialiased">
      <header className="sticky top-0 bg-wiki-paper border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/wikiendum-logo.svg" alt="Wikiendum Logo" width={50} height={50} className="rounded shadow-sm" />
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
        <section className="mb-12 border-b border-gray-200 pb-10">
          <h1 className="text-4xl font-sans font-bold mb-6 text-wiki-text-primary text-center">Bem-vindo ao Wikiendum</h1>
          <div className="text-lg leading-relaxed text-wiki-text-secondary space-y-4">
            <p>A linguagem acadêmica é marcada pela <strong>polissemia</strong>. Raros são os conceitos nas ciências humanas que possuem uma única definição inquestionável.</p>
            <p>O <em>Wikiendum</em> é um dicionário colaborativo focado em mapear a literatura acadêmica. Nosso objetivo é exaurir as definições de termos complexos, mostrando como diferentes autores e escolas de pensamento definiram o mesmo fenômeno.</p>
          </div>
        </section>

        <div className="mb-10 font-sans">
          <input type="text" placeholder="Buscar verbete (ex: laicidade)..." className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-wiki-link focus:ring-1 focus:ring-wiki-link bg-wiki-bg/50" />
        </div>

        <h2 className="text-2xl font-sans font-semibold mb-6 text-wiki-text-primary">Índice de Verbetes ({verbetes.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          {verbetes.map((verbete) => (
            <Link href={`/termo/${verbete.slug}`} key={verbete.slug} className="block p-5 border border-gray-200 rounded-xl hover:border-wiki-link hover:bg-wiki-accent/20 transition-colors group">
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-semibold text-wiki-link group-hover:underline">{verbete.termo}</span>
              </div>
              <span className="text-xs text-wiki-text-secondary">{verbete.quantidade} {verbete.quantidade === 1 ? 'definição encontrada' : 'definições encontradas'} na literatura</span>
            </Link>
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