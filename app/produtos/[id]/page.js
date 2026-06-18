'use client'

import { useState, useEffect, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { nomePtBr, descricaoPtBr, categoriaPtBr, formatarPreco } from '@/lib/produtos'
import styles from './page.module.css'

export default function DetalheProduto({ params }) {
  const { id } = use(params)
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data))
      .catch(() => {})
      .finally(() => setCarregando(false))
  }, [id])

  if (carregando) {
    return <div className={styles.pagina}>Carregando...</div>
  }

  if (!produto) {
    return <div className={styles.pagina}>Produto não encontrado.</div>
  }

  const nome = nomePtBr(Number(id)) || produto.title
  const descricao = descricaoPtBr(Number(id)) || produto.description

  return (
    <div className={styles.pagina}>
      <Link href="/produtos" className={styles.voltar}>
        ← Voltar ao Catálogo
      </Link>

      <div className={styles.conteudo}>
        <div className={styles.imagemBox}>
          <Image
            src={produto.image}
            alt={nome}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className={styles.info}>
          <span className={styles.categoria}>{categoriaPtBr(produto.category)}</span>
          <h1 className={styles.titulo}>{nome}</h1>
          <p className={styles.preco}>{formatarPreco(produto.price)}</p>
          <p className={styles.avaliacao}>
            ⭐ {produto.rating?.rate} ({produto.rating?.count} avaliações)
          </p>
          <p className={styles.descricao}>{descricao}</p>
        </div>
      </div>
    </div>
  )
}
