import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

async function getProduto(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  })
  return res.json()
}

export default async function DetalheProduto({ params }) {
  const produto = await getProduto(params.id)

  return (
    <div className={styles.pagina}>
      <Link href="/produtos" className={styles.voltar}>
        ← Voltar ao Catálogo
      </Link>

      <div className={styles.conteudo}>
        <div className={styles.imagemBox}>
          <Image
            src={produto.image}
            alt={produto.title}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className={styles.info}>
          <span className={styles.categoria}>{produto.category}</span>
          <h1 className={styles.titulo}>{produto.title}</h1>
          <p className={styles.preco}>$ {produto.price?.toFixed(2)}</p>
          <p className={styles.avaliacao}>
            ⭐ {produto.rating?.rate} ({produto.rating?.count} avaliações)
          </p>
          <p className={styles.descricao}>{produto.description}</p>
        </div>
      </div>
    </div>
  )
}
