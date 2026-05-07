import Image from 'next/image';
import Link from 'next/link';

export default function ColaborarPage() {
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
            <Link href="/colaborar" className="text-wiki-link font-bold underline">Colaborar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 mt-4 bg-wiki-paper shadow-sm rounded-lg border border-gray-100 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-wiki-text-primary">Colabore com o Dicionário</h1>
        <p className="text-wiki-text-secondary mb-8 leading-relaxed">
          Encontrou uma definição marcante em algum livro ou artigo acadêmico? Preencha o formulário abaixo. 
          Sua contribuição passará por uma revisão e será adicionada ao verbete correspondente.
        </p>

        {/* FORMULÁRIO - Substitua o link abaixo após criar conta no Formspree */}
        <form action="https://formspree.io/f/xbdworyb" method="POST" className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Seu Nome</label>
              <input name="nome" type="text" required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Seu ORCID (Opcional)</label>
              <input name="orcid" type="text" placeholder="0000-0000-0000-0000" className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none" />
            </div>
          </div>

          <hr className="border-gray-100" />

          <div>
            <label className="block text-sm font-semibold mb-2">Termo/Verbete (Ex: Laicidade)</label>
            <input name="termo" type="text" required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none font-serif text-lg" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Citação Literária (Texto exato)</label>
            <textarea name="citacao" rows={5} required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none italic"></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Obra (Título do Livro/Artigo)</label>
              <input name="obra" type="text" required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Autor Citado</label>
              <input name="autor" type="text" required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Ano</label>
              <input name="ano" type="number" required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Página</label>
              <input name="pagina" type="text" required className="w-full p-3 rounded border border-gray-300 focus:ring-1 focus:ring-wiki-link outline-none" />
            </div>
          </div>

          <button type="submit" className="w-full bg-wiki-link text-white font-bold py-4 rounded-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200">
            Enviar Proposta de Verbete
          </button>
        </form>
      </main>
    </div>
  );
}