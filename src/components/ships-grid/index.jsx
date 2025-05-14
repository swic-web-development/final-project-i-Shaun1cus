import Card from './card'

export default function ShipsGrid({ ships }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ships.map((ship) => (
        <Card ship={ship} key={ship.uid} />
      ))}
    </div>
  )
}
