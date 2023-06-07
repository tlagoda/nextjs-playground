import styles from './page.module.css'
import Counter from './components/Counter'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>MyApp</h1>
      <Counter />
    </main>
  )
}