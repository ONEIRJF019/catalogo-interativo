import Link from 'next/link'
import ProductCard from '@/components/ProductCard/ProductCard'
import styles from './page.module.css'

async function getProdutosDestaque() {
  const res = await fetch('https://fakestoreapi.com/products?limit=4', {
    next: { revalidate: 3600 },
  })
  return res.json()
}

export default async function Home() {
  const produtos = await getProdutosDestaque()

  return (
    <div>
      <section className={styles.hero}>
        <h1>Os melhores produtos de tecnologia</h1>
        <p>Encontre eletrônicos, gadgets e muito mais no nosso catálogo.</p>
        <Link href="/produtos" className={styles.botao}>
          Ver todos os produtos
        </Link>
      </section>

      <section className={styles.destaques}>
        <h2>Destaques</h2>
        <div className={styles.grid}>
          {produtos.map((p) => (
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
      </section>
    </div>
  )
}
