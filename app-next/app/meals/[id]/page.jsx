import Meal from "../../../components/MealsList/Meal";
import ReservationsForm from "@/components/ReservationsForm";
import ReviewsForm from "@/components/ReviewsForm";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:3001/api/meals");
  const meals = await res.json();

  return meals.map((meal) => ({
    id: meal.id.toString(),
  }));
}

export default async function specificMeal({ params }) {
  const { id } = params;
  const res = await fetch(`http://127.0.0.1:3001/api/meals/${id}`);
  const meal = await res.json();

  return (
    <>
      <div className="card-reservation">
        <div className="reservation-mealCardContainer">
          <Meal meal={meal} showDetails={true} showReserveButton={false} />
        </div>
        <ReservationsForm mealId={params.id} meal={meal} />
      </div>

      <br />
      <br />
      <br />

      <ReviewsForm mealId={params.id} />
    </>
  );
}
