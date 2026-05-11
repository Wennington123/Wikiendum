import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wikiendum.wiki'

  // 1. Caminho da sua pasta de verbetes (ajuste se o nome da pasta for diferente)
  const contentDirectory = path.join(process.cwd(), 'content')
  
  // 2. Ler todos os arquivos da pasta 'content'
  // Filtramos para pegar só o que termina em .md ou .mdx
  const files = fs.readdirSync(contentDirectory).filter(file => 
    file.endsWith('.md') || file.endsWith('.mdx')
  )

  // 3. Transformar nomes de arquivos em objetos do Sitemap
  const termEntries = files.map((file) => {
    // Remove a extensão (.md) para criar o "slug" da URL
    const slug = file.replace(/\.mdx?$/, '')
    
    return {
      url: `${baseUrl}/verbetes/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // 4. Suas páginas estáticas (as que você já tinha)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/colaborar`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/verbetes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Junta tudo: Páginas fixas + Verbetes dinâmicos
  return [...staticPages, ...termEntries]
}