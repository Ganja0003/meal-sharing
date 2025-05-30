import Meal from "../../../components/MealsList/Meal";

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

        <form action="http://127.0.0.1:3001/api/reservations" method='POST' className="reservationsForm">
          <h1>Reservations</h1>

          <input type="hidden" name="meal_id" value={meal.id} />
          <input type="hidden" name="created_date" value={new Date().toISOString().split("T")[0]} />

          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="contact_name" required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="contact_email" required />
          </div>

          <div>
            <label htmlFor="number">Number:</label>
            <input type="text" id="number" name="contact_phonenumber" required />
          </div>

          <div>
            <label htmlFor="guests">Guests:</label>
            <input type="number" id="guests" name="number_of_guests" required />
          </div>

          <button type="submit">Submit</button>
        </form>
        
      </div>







      <br />
      <br />
      <br />

      <form action="" className="reviewForm">
        <h1>Reviews</h1>
        <div className="reviewFormContainer">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" required />
          </div>

          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              rows="20"
              cols="80"
              placeholder="Write your review here..."
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
