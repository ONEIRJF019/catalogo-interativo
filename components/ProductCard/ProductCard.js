'use client'

import Link from 'next/link'
import Image from 'next/image'
import { nomePtBr, categoriaPtBr, formatarPreco } from '@/lib/produtos'
import styles from './ProductCard.module.css'

export default function ProductCard({ id, title, price, image, rating, category }) {
  const nome = nomePtBr(id) || title

  return (
    <Link href={`/produtos/${id}`} className={styles.card}>
      <div className={styles.imageBox}>
        <Image
          src={image}
          alt={nome}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, 260px"
        />
      </div>
      <div className={styles.info}>
        {category && <span className={styles.categoria}>{categoriaPtBr(category)}</span>}
        <p className={styles.title}>{nome}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>{formatarPreco(price)}</span>
          <span className={styles.rating}>⭐ {rating?.rate?.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}
