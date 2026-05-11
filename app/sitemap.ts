import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wikiendum.wiki'

  // 1. Aponta exatamente para a pasta 'content' na raiz do seu projeto
  const contentDirectory = path.join(process.cwd(), 'content')
  
  let termEntries: MetadataRoute.Sitemap = []
  
  // 2. Lê a pasta content e pega todos os arquivos .md
  try {
    if (fs.existsSync(contentDirectory)) {
      const files = fs.readdirSync(contentDirectory).filter(file => 
        file.endsWith('.md') || file.endsWith('.mdx')
      )

      termEntries = files.map((file) => {
        // Tira o .md do final do arquivo para pegar o nome limpo
        const slug = file.replace(/\.mdx?$/, '')
        
        return {
          // encodeURIComponent garante que arquivos com espaços ou acentos
          // não quebrem a estrutura do arquivo XML para os robôs do Google.
          url: `${baseUrl}/termo/${encodeURIComponent(slug)}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        }
      })
    }
  } catch (error) {
    console.error("Erro ao ler a pasta content para o sitemap:", error)
  }

  // 3. Suas páginas fixas (Baseadas na sua pasta 'app')
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // Página inicial
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/colaborar`, // Página colaborar
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termo`, // Caso você tenha uma página principal listando os termos
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // 4. Retorna a lista completa para o Next.js gerar o XML
  return [...staticPages, ...termEntries]
}