'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter'
import styles from './page.module.css'

export default function Produtos() {
  const [todos, setTodos] = useState([])
  const [filtrados, setFiltrados] = useState([])
  const [categorias, setCategorias] = useState([])
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [busca, setBusca] = useState('')
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregarDados() {
      const [produtosRes, categoriasRes] = await Promise.all([
        fetch('https://fakestoreapi.com/products'),
        fetch('https://fakestoreapi.com/products/categories'),
      ])
      const produtos = await produtosRes.json()
      const cats = await categoriasRes.json()
      setTodos(produtos)
      setFiltrados(produtos)
      setCategorias(cats)
      setCarregando(false)
    }
    carregarDados()
  }, [])

  useEffect(() => {
    let resultado = todos

    if (categoriaSelecionada !== '') {
      resultado = resultado.filter((p) => p.category === categoriaSelecionada)
    }

    if (busca !== '') {
      resultado = resultado.filter((p) =>
        p.title.toLowerCase().includes(busca.toLowerCase())
      )
    }

    setFiltrados(resultado)
  }, [busca, categoriaSelecionada, todos])

  function handleBusca(texto) {
    setBusca(texto)
  }

  function handleCategoria(categoria) {
    setCategoriaSelecionada(categoria)
  }

  return (
    <div className={styles.pagina}>
      <h1 className={styles.titulo}>Produtos</h1>

      <div className={styles.filtros}>
        <SearchBar onSearch={handleBusca} />
        <CategoryFilter
          categories={categorias}
          categoriaSelecionada={categoriaSelecionada}
          onSelect={handleCategoria}
        />
      </div>

      {carregando ? (
        <p className={styles.info}>Carregando produtos...</p>
      ) : filtrados.length === 0 ? (
        <p className={styles.info}>Nenhum produto encontrado.</p>
      ) : (
        <div className={styles.grid}>
          {filtrados.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              rating={p.rating}
            />
          ))}
        </div>
      )}
    </div>
  )
}
