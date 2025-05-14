import Header from './components/header'
import ShipsGrid from './components/ships-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    async function fetchShips() {
      const response = await fetch('https://swapi.dev/api/starships/')
      const data = await response.json()
      setShips(data.results)
    }
    fetchShips()
  }, [])

  return (
    <main className="container mx-auto p-4">
      <Header />
      <h1 className="text-2xl font-bold">Star Wars Ships</h1>
      <ShipsGrid ships={ships} />
    </main>
  )
}
