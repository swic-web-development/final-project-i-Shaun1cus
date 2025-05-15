import Card from './card'

export default function ShipsGrid({ ships }) {
  if (!ships || ships.length === 0) {
    return <p className="text-center text-lg text-gray-500">No ships available to display.</p>
  }

  return (
    <div className="lg:grid-cols-3bg-black grid grid-cols-1 gap-6 rounded-lg p-6 sm:grid-cols-2">
      {ships.map((ship) => (
        <Card ship={ship} key={ship.uid || ship.name} />
      ))}
    </div>
  )
}
