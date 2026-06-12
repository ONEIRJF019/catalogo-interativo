import Image from 'next/image'
import Link from 'next/link'
import { nomePtBr, descricaoPtBr, categoriaPtBr, formatarPreco } from '@/lib/produtos'
import styles from './page.module.css'

async function getProduto(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function DetalheProduto({ params }) {
  const { id } = await params
  const produto = await getProduto(id)

  if (!produto) {
    return <div style={{ padding: '48px 32px' }}>Produto não encontrado.</div>
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
