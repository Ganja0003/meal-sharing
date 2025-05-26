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
              
           
          
       
        
        <form action="" className="reservationsForm">
          <h1>Reservations</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>

          <div>
            <label htmlFor="number">Number:</label>
            <input type="text" id="number" name="number" required />
          </div>

          <div>
            <label htmlFor="guests">Guests:</label>
            <input type="text" id="guests" name="guests" required />
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
            <input type="text" name="title" id="title" required/>
          </div>

          <div>
            <label htmlFor="review">review:</label>
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
