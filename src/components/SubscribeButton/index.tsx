import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

type SubscribeButtonProps = {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const {data: session } = useSession()

  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }
  }
  return (
    <button
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}