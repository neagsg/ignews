import Head from 'next/head'
import Image from 'next/image'

import styles from './home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.homeContent}>
          <span>Hey, welcome</span>
          <h1>New about the <span>React</span> world</h1>
          <p>
            Get acess to all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width={750}
          height={750}          
        />

      </main>
    </>
  )
}
