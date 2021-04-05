import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({author}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre o sistema
        </h1>
        O Sistema foi feito como aprendizado em live SSR e CSR 
        <hr />
        Autor: {author}
        
      </main>


    </div>
  )
}

export async function getStaticProps(){
  return{
    props:{
      author: 'Samuel'
    }
  }
}
