import Counter from './components/Counter'

export default function Home() {
  return (
    <main>
      <h1>MyApp</h1>
      <Counter startingCount={-1}/>
    </main>
  )
}