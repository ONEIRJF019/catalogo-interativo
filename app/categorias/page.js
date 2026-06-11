import Link from 'next/link'
import styles from './page.module.css'

async function getCategorias() {
  const res = await fetch('https://fakestoreapi.com/products/categories', {
    next: { revalidate: 3600 },
  })
  return res.json()
}

export default async function Categorias() {
  const categorias = await getCategorias()

  return (
    <div className={styles.pagina}>
      <h1 className={styles.titulo}>Categorias</h1>
      <p className={styles.subtitulo}>Explore os produtos por categoria</p>

      <div className={styles.grid}>
        {categorias.map((cat) => (
          <Link
            key={cat}
            href={`/produtos?categoria=${cat}`}
            className={styles.card}
          >
            <span className={styles.nome}>{cat}</span>
            <span className={styles.link}>Ver produtos →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
