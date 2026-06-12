'use client'

import { categoriaPtBr } from '@/lib/produtos'
import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ categories, categoriaSelecionada, onSelect }) {
  return (
    <div className={styles.container}>
      <button
        className={categoriaSelecionada === '' ? styles.ativo : styles.botao}
        onClick={() => onSelect('')}
      >
        Todos
      </button>

      {categories.map((categoria) => (
        <button
          key={categoria}
          className={categoriaSelecionada === categoria ? styles.ativo : styles.botao}
          onClick={() => onSelect(categoria)}
        >
          {categoriaPtBr(categoria)}
        </button>
      ))}
    </div>
  )
}
