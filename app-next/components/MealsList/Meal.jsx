import Link from "next/link";

function Meal({ meal, showDetails = false, showReserveButton = true }) {
 
  return (
    <>
      <h1 className="mealTitle">{meal.title}</h1>
      <img src={meal.image_url} alt="" className="mealImage" />
      <p className="mealDescription">{meal.description}</p>

      {showDetails && (
        <>
          <p>Location: {meal.location}</p>
          <p>Date: {meal.event_time.slice(0, 10)}</p>
          <p>Available Reservations: {meal.available_reservations}</p>
          <p className="mealPrice">{`Price: ${meal.price} DKK`}</p>
        </>
      )}

      {!showDetails && (
        <p className="mealPrice">{`Price: ${meal.price} DKK`}</p>
      )}

      {showReserveButton && (
        <Link href={`/meals/${meal.id}`}>
          <button className="reserveButton">See more</button>
        </Link>
      )}
    </>
  );
}

export default Meal;
