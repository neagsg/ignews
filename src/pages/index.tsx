import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  }
}

import styles from './home.module.scss'
export default function Home({ product }: HomeProps) {  
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.homeContent}>
          <span>👏 Hey, welcome</span>
          <h1>New about the <span>React</span> world</h1>
          <p>
            Get acess to all publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
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

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KVgipG2R75aipBO9taVMIrz')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
