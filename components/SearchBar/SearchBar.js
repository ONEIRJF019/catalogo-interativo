'use client'

import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [texto, setTexto] = useState('')

  function handleChange(e) {
    setTexto(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Buscar produto..."
      value={texto}
      onChange={handleChange}
    />
  )
}
