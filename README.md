# TechStore — Catálogo Interativo de Produtos

Projeto desenvolvido para a avaliação P2 da disciplina de **Programação Web I** — UNIFAN, turma ESN-5, 2026/1.

> A ideia era criar um catálogo de produtos funcional, com visual moderno e tudo em português. O resultado foi o TechStore.

---

## O que é o projeto

O TechStore é uma aplicação web de catálogo interativo de produtos, construída com **Next.js** e **React**. Os dados vêm da [Fake Store API](https://fakestoreapi.com), uma API pública gratuita com produtos reais — só que eu traduzi tudo para o português, incluindo nomes, descrições, categorias e preços em reais (R$).

O visual foi inspirado no site da Nike: fundo escuro no hero, tipografia pesada em maiúsculas, paleta preto e branco, sem firula. Simples e direto.

---

## Funcionalidades

- Página inicial com hero de destaque e 4 produtos em evidência
- Catálogo completo com todos os produtos
- Busca em tempo real — funciona pelos nomes em português
- Filtro por categoria com botões de seleção
- Ao clicar numa categoria na página Categorias, já abre o catálogo filtrado
- Página de detalhe individual de cada produto
- Todos os preços convertidos para R$ (BRL)
- Layout responsivo — funciona em celular, tablet e desktop

---

## Tecnologias utilizadas

- **Next.js 16** com App Router
- **React 19** com hooks (`useState`, `useEffect`, `useSearchParams`)
- **CSS Modules** — cada componente tem seu próprio arquivo `.module.css`
- **Fake Store API** — fonte de dados pública
- **Vercel** — deploy em produção

Sem Tailwind, sem TypeScript, sem biblioteca de UI. Tudo feito na mão.

---

## Estrutura de rotas

| Rota | O que tem lá |
|---|---|
| `/` | Página inicial com hero e produtos em destaque |
| `/produtos` | Catálogo completo com busca e filtro por categoria |
| `/produtos/[id]` | Detalhe de um produto específico (rota dinâmica) |
| `/categorias` | Cards das 4 categorias disponíveis |
| `/sobre` | Informações sobre o projeto e tecnologias |

---

## Componentes

O projeto tem 5 componentes reutilizáveis, cada um na própria pasta com seu CSS:

| Componente | O que faz |
|---|---|
| `Header` | Navegação com links para todas as rotas |
| `Footer` | Rodapé com nome do projeto, disciplina e copyright |
| `ProductCard` | Card de produto com imagem, categoria, nome e preço |
| `SearchBar` | Campo de busca que filtra os produtos em tempo real |
| `CategoryFilter` | Botões de filtro — preto quando ativo, cinza quando inativo |

---

## Como rodar localmente

Precisa ter o Node.js instalado na máquina.

```bash
# Clonar o repositório
git clone https://github.com/ONEIRJF019/catalogo-interativo-web1.git

# Entrar na pasta
cd catalogo-interativo-web1

# Instalar as dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
```

Depois abre o navegador em [http://localhost:3000](http://localhost:3000).

---

## Deploy

A aplicação está no ar pela Vercel:

🔗 **[techstore-ojf.vercel.app](https://techstore-ojf.vercel.app)** ← substituir pelo link real

---

## Desafios que encontrei

- A Fake Store API retorna tudo em inglês. Criei um arquivo `lib/produtos.js` com as traduções de todos os 20 produtos — nomes, descrições e categorias em português.
- O filtro por categoria precisava funcionar ao navegar da página Categorias para a página Produtos. Resolvi com `useSearchParams` lendo o parâmetro `?categoria=` da URL.
- No Next.js 16, o `params` das rotas dinâmicas virou uma Promise — precisei usar `await params` no detalhe do produto.
- Durante o deploy na Vercel, a API bloqueava as requisições feitas pelo servidor. A solução foi buscar os dados direto no browser com `useEffect`.

---

## Informações acadêmicas

- **Instituição:** Centro Universitário Alfredo Nasser — UNIFAN
- **Curso:** Engenharia de Software
- **Disciplina:** Programação Web I
- **Professor:** Adriano Baião
- **Turma:** ESN-5 · 2026/1
- **Aluno:** Oneir Junior — OJF

---

© 2026 OJF — Todos os direitos reservados
