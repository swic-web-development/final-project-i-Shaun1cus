export default function Card({ ship }) {
  const { name, model, manufacturer, starship_class, crew, passengers, length, cargo_capacity } =
    ship

  return (
    // Displays the ship details in a card format
    <section className="rounded-lg bg-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:bg-gray-700 hover:shadow-xl">
      <h2 className="mb-4 text-2xl font-bold text-yellow-400">{name}</h2>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Model:</strong> {model}
      </p>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Manufacturer:</strong> {manufacturer}
      </p>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Starship Class:</strong> {starship_class}
      </p>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Crew:</strong> {crew}
      </p>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Passengers:</strong> {passengers}
      </p>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Length:</strong> {length} meters
      </p>
      <p className="text-gray-300">
        <strong className="text-yellow-400">Cargo Capacity:</strong> {cargo_capacity} kg
      </p>
    </section>
  )
}
