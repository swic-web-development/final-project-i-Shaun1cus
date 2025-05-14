import Header from './components/header'
import ShipsGrid from './components/ships-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    fetch('https://swapi.tech/api/starships/')
      .then((response) => response.json())
      .then((data) => {
        setShips(data.results)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <main>
      <Header />
      <ShipsGrid ships={ships} />
    </main>
  )
}
