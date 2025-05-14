export default function Card({ ship }) {
  const { name, model, manufacturer, cost_in_credits, crew, passengers, max_atmosphering_speed } =
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
        <strong>Cost in Credits:</strong> {cost_in_credits}
      </p>
      <p>
        <strong>Crew:</strong> {crew}
      </p>
      <p>
        <strong>Passengers:</strong> {passengers}
      </p>
      <p>
        <strong>Max Atmosphering Speed:</strong> {max_atmosphering_speed}
      </p>
    </div>
  )
}
