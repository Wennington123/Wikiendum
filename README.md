# 📖 Wikiendum

**O dicionário colaborativo de conceitos acadêmicos e filosóficos.**

A linguagem acadêmica é marcada pela **polissemia**. Raros são os conceitos nas ciências humanas que possuem uma única definição inquestionável. O *Wikiendum* nasceu como um esforço coletivo para mapear a literatura acadêmica. 

Nosso objetivo é exaurir as definições de termos complexos, fornecendo aos pesquisadores um panorama prático de como diferentes autores, em diferentes épocas e escolas de pensamento, definiram o mesmo fenômeno.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com foco em performance, SEO e facilidade de manutenção:
* **[Next.js 16](https://nextjs.org/)** (App Router & Turbopack)
* **[React](https://react.dev/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Tailwind CSS v4](https://tailwindcss.com/)** para estilização utilitária e design responsivo.
* **Markdown + Gray-Matter** para o gerenciamento de conteúdo (verbetes).

---
## 🌐 Acesso ao Projeto

O Wikiendum está disponível online! Acesse o dicionário completo em:
**[Inserir o seu link do Vercel aqui - ex: https://wikiendum.vercel.app]**

---

## 🤝 Como colaborar (Passo a Passo)

Você não precisa saber programar ou instalar nada no seu computador para colaborar com o Wikiendum! Todo o conteúdo é gerenciado através de arquivos de texto simples (Markdown) dentro da pasta `content`.

Siga este passo a passo para adicionar novos verbetes ou definições diretamente pelo navegador:

### 1. Faça um "Fork" do projeto
No canto superior direito desta página no GitHub, clique no botão **"Fork"** e depois em "Create Fork". Isso criará uma cópia exata do Wikiendum no seu próprio perfil do GitHub para você poder mexer à vontade.

### 2. Adicione ou Edite um Arquivo
No seu repositório recém-copiado, navegue até a pasta `content`. 
- **Para um novo termo:** Clique em `Add file` > `Create new file`. O nome do arquivo deve ser o termo em minúsculas (ex: `laicidade.md`).
- **Para adicionar a um termo existente:** Clique no arquivo desejado e depois no ícone de lápis (✏️) no canto superior direito para editar.

### 3. Estrutura Padrão (Frontmatter)
Todo verbete deve seguir este molde exato. Copie, cole e preencha com a sua citação acadêmica:

---
termo: "Nome do Termo com Letra Maiúscula"
definicoes:
  - id: 1
    texto_citacao: "Escreva aqui a citação exata do autor sobre o conceito..."
    autor_citado: "Nome do Autor"
    obra: "Nome do Livro ou Artigo"
    ano: 2024
    pagina: 42
    colaborador_nome: "Seu Nome"
    colaborador_orcid: "0000-0000-0000-0000"
---

Escreva aqui um texto livre de introdução sobre o termo. Ele aparecerá no topo da página.

(Dica: Para adicionar mais definições no mesmo arquivo, basta criar um - id: 2 seguindo o mesmo padrão abaixo da primeira definição, dentro dos tracinhos).

### 4. Salve suas alterações
Após preencher as informações, vá para o canto superior direito e clique no botão verde "Commit changes...". Escreva uma breve mensagem dizendo o que você fez (ex: "Adicionado o verbete X") e confirme.

### 5. Abra um "Pull Request"
Agora é só mandar o seu texto para o dicionário oficial!
Volte para a página inicial do seu Fork, clique no botão "Contribute" e depois em "Open pull request". Deixe um comentário sobre a sua adição e clique em "Create pull request".

Pronto! Sua contribuição será analisada e, assim que aprovada, entrará automaticamente no site oficial do Wikiendum.
