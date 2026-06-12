import Link from 'next/link'
import { categoriaPtBr } from '@/lib/produtos'
import styles from './page.module.css'

const categorias = ['electronics', 'jewelery', "men's clothing", "women's clothing"]

export default function Categorias() {
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
            <span className={styles.nome}>{categoriaPtBr(cat)}</span>
            <span className={styles.link}>Ver produtos →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
