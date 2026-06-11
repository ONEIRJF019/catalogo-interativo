import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'TechStore - Catálogo de Produtos',
  description: 'Catálogo interativo de produtos de tecnologia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
