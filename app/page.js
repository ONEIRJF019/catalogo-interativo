import Link from 'next/link'
import ProductCard from '@/components/ProductCard/ProductCard'
import styles from './page.module.css'

async function getProdutosDestaque() {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=4', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function Home() {
  const produtos = await getProdutosDestaque()

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>Catálogo de Produtos</span>
          <h1>Os melhores produtos de tecnologia</h1>
          <p>Eletrônicos, gadgets, roupas e acessórios. Encontre tudo no nosso catálogo.</p>
          <Link href="/produtos" className={styles.botao}>
            Comprar agora
          </Link>
        </div>
      </section>

      <section className={styles.destaques}>
        <div className={styles.destaquesHeader}>
          <h2>Destaques</h2>
          <Link href="/produtos" className={styles.verTodos}>Ver todos</Link>
        </div>
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
