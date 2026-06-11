'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductCard.module.css'

export default function ProductCard({ id, title, price, image, rating }) {
  return (
    <Link href={`/produtos/${id}`} className={styles.card}>
      <div className={styles.imageBox}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, 240px"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>$ {price.toFixed(2)}</span>
          <span className={styles.rating}>⭐ {rating?.rate?.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}
