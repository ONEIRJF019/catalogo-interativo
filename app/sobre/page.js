import styles from './page.module.css'

export default function Sobre() {
  return (
    <div className={styles.pagina}>
      <h1 className={styles.titulo}>Sobre o Projeto</h1>

      <div className={styles.conteudo}>
        <section className={styles.secao}>
          <h2>O que é o TechStore?</h2>
          <p>
            O TechStore é um catálogo interativo de produtos desenvolvido como
            projeto da disciplina de Programação Web I. O objetivo é praticar
            os conceitos de React e Next.js na construção de uma aplicação web
            real.
          </p>
        </section>

        <section className={styles.secao}>
          <h2>Tecnologias usadas</h2>
          <ul className={styles.lista}>
            <li>Next.js (App Router)</li>
            <li>React com hooks (useState, useEffect)</li>
            <li>CSS Modules</li>
            <li>Fake Store API (dados dos produtos)</li>
          </ul>
        </section>

        <section className={styles.secao}>
          <h2>Funcionalidades</h2>
          <ul className={styles.lista}>
            <li>Listagem de produtos com grade responsiva</li>
            <li>Busca em tempo real por nome do produto</li>
            <li>Filtro por categoria</li>
            <li>Página de detalhe de cada produto</li>
            <li>Navegação com roteamento do Next.js</li>
          </ul>
        </section>

        <section className={styles.secao}>
          <h2>Informações acadêmicas</h2>
          <ul className={styles.lista}>
            <li>Instituição: Centro Universitário Alfredo Nasser (UNIFAN)</li>
            <li>Curso: Engenharia de Software</li>
            <li>Disciplina: Programação Web I</li>
            <li>Professor: Adriano Baião</li>
            <li>Turma: ESN-5 · 2026/1</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
