import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          TechStore
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/categorias">Categorias</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}
