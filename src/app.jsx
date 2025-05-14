import Header from './components/header'
import ShipsGrid from './components/ships-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    async function fetchDetailedShips() {
      try {
        const response = await fetch('https://swapi.tech/api/starships/')
        const data = await response.json()

        // Fetch detailed data for each ship
        const detailedShips = await Promise.all(
          data.results.map(async (ship) => {
            const shipResponse = await fetch(ship.url) // Fetch detailed ship data
            const shipData = await shipResponse.json()
            return shipData.result.properties // Return the detailed properties
          }),
        )

        setShips(detailedShips) // Set the detailed ship data
        console.log(detailedShips) // Debugging: Log the detailed ship data
      } catch (error) {
        console.error('Error fetching detailed ships:', error)
      }
    }

    fetchDetailedShips()
  }, [])

  return (
    <main>
      <Header />
      <ShipsGrid ships={ships} />
    </main>
  )
}
