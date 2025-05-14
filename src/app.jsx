import Header from './components/header'
import ShipsGrid from './components/ships-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    async function fetchShips() {
      try {
        const response = await fetch('https://swapi.tech/api/starships/')
        const data = await response.json()
        setShips(data.result) // Corrected path to access the ships data
      } catch (error) {
        console.error('Error fetching ships:', error)
      }
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
