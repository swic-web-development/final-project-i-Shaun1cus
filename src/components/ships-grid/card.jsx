export default function Card({ ship }) {
  const { name, model, manufacturer, starship_class, crew, passengers, length, cargo_capacity } =
    ship

  return (
    <div className="m-4 rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>
        <strong>Model:</strong> {model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {manufacturer}
      </p>
      <p>
        <strong>Starship Class:</strong> {starship_class}
      </p>
      <p>
        <strong>Crew:</strong> {crew}
      </p>
      <p>
        <strong>Passengers:</strong> {passengers}
      </p>
      <p>
        <strong>Length:</strong> {length} meters
      </p>
      <p>
        <strong>Cargo Capacity:</strong> {cargo_capacity} kg
      </p>
    </div>
  )
}
