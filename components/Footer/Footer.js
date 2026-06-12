import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>TechStore — Catálogo Interativo de Produtos</p>
      <p>Programação Web I · UNIFAN · 2026</p>
      <p className={styles.copy}>© 2026 OJF — Todos os direitos reservados</p>
    </footer>
  )
}
