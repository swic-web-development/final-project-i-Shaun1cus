import Card from './card'

export default function ShipsGrid({ ships }) {
  if (!ships || ships.length === 0) {
    return <p className="text-center text-gray-500">No ships available</p>
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ships.map((ship) => (
        <Card ship={ship} key={ship.uid || ship.name} />
      ))}
    </div>
  )
}
