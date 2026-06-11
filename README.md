# TechStore — Catálogo Interativo de Produtos

Projeto desenvolvido para a disciplina de **Programação Web I** do curso de Engenharia de Software — Centro Universitário Alfredo Nasser (UNIFAN), turma ESN-5, 2026/1.

---

## Sobre o projeto

O TechStore é um catálogo interativo de produtos construído com **Next.js** e **React**. A aplicação consome a [Fake Store API](https://fakestoreapi.com) para exibir produtos reais, com filtro por busca e por categoria em tempo real.

---

## Tecnologias

- [Next.js](https://nextjs.org) — framework React com App Router
- React com hooks (`useState`, `useEffect`)
- CSS Modules — estilização por componente
- [Fake Store API](https://fakestoreapi.com) — fonte de dados pública

---

## Funcionalidades

- Listagem de produtos em grade responsiva
- Busca em tempo real pelo nome do produto
- Filtro por categoria
- Página de detalhe individual de cada produto
- Layout responsivo para mobile, tablet e desktop

---

## Estrutura de rotas

| Rota | Descrição |
|---|---|
| `/` | Página inicial com produtos em destaque |
| `/produtos` | Catálogo completo com busca e filtro |
| `/produtos/[id]` | Detalhe de um produto específico |
| `/categorias` | Listagem de todas as categorias |
| `/sobre` | Informações sobre o projeto |

---

## Componentes criados

| Componente | Descrição |
|---|---|
| `Header` | Barra de navegação com links para todas as rotas |
| `Footer` | Rodapé com informações do projeto |
| `ProductCard` | Card de exibição de produto com imagem, nome e preço |
| `SearchBar` | Campo de busca com filtro em tempo real |
| `CategoryFilter` | Botões de filtro por categoria |

---

## Como rodar localmente

**Pré-requisitos:** Node.js instalado

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Informações acadêmicas

- **Instituição:** Centro Universitário Alfredo Nasser — UNIFAN
- **Curso:** Engenharia de Software
- **Disciplina:** Programação Web I
- **Professor:** Adriano Baião
- **Turma:** ESN-5 · 2026/1
