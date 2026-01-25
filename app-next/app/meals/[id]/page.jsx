import Meal from "../../../components/MealsList/Meal";
import ReservationsForm from "@/components/ReservationsForm";
import ReviewsForm from "@/components/ReviewsForm";


export default async function specificMeal({ params }) {
  const { id } = params;
  const res = await fetch(`http://127.0.0.1:3001/api/meals/${id}`, {
    cache: "no-store",
  });
  const meal = await res.json();

  const response = await fetch(`http://127.0.0.1:3001/api/reviews/${id}`, {
    cache: "no-store",
  });
  const reviews = await response.json();

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

      <div className="review-help-box">
        <h3>Need Help Writing a Review?</h3>
        <p>
          Just tell us what you liked or what could be better — we're always
          improving!
        </p>
      </div>

      <div className="reviewTitle">
          <h1>Customer Reviews</h1>
        </div>

      <div className="reviews">
        {reviews.map((review) => {
          return (
            <>
              <div className="review">
                <p>Headline: {review.review_title}</p>
                <p>Review: {review.review_description}</p>
                <p>Rating: {review.stars}⭐</p>
              </div>
              
            </>
          );
        })}
      </div>
    </>
  );
}
