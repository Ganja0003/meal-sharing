import Meal from "../../../components/MealsList/Meal";
import ReservationsForm from "@/components/ReservationsForm";

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

      <form
        action="http://127.0.0.1:3001/api/reviews"
        Method="POST"
        className="reviewForm"
      >
        <h1>Reviews</h1>

        <input type="hidden" name="meal_id" value={meal.id} />
        <input
          type="hidden"
          name="created_date"
          value={new Date().toISOString().split("T")[0]}
        />

        <div className="reviewFormContainer">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" required />
          </div>

          <div>
            <label htmlFor="review">Description:</label>
            <textarea
              id="review"
              name="description"
              rows="20"
              cols="80"
              placeholder="Write your review here..."
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="stars">Stars:</label>
            <input type="number" max={5} min={1} name="stars" required />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
