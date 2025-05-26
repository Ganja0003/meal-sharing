import samosa from "../../assets/samosa.jpeg";
import lasagna from "../../assets/lasagna.jpeg";
import biryani from "../../assets/chicken-biryani.jpeg";
import pizza from "../../assets/pizza.jpeg";
import burger from "../../assets/burger.jpeg";
import falafel from "../../assets/falafel.jpeg";
import Link from "next/link";

function Meal({ meal, showDetails = false, showReserveButton = true  }) {
  let mealImage;

  switch (meal.title) {
    case "Lasagna":
      mealImage = lasagna;
      break;
    case "Chicken biryani":
      mealImage = biryani;
      break;
    case "Samosa":
      mealImage = samosa;
      break;
    case "Falafel Wrap":
      mealImage = falafel;
      break;
      case 'Burger':
      mealImage = burger;
      break
      case 'Pizza':
      mealImage = pizza;
      break
  }

  
  return (
    <>
      <h1 className="mealTitle">{meal.title}</h1>
      <img src={mealImage?.src} alt="" className="mealImage" />
      <p className="mealDescription">{meal.description}</p>
      
      
      {
        showDetails && (
          <>
          <p>Location: {meal.location}</p>
          <p>Date: {meal.when.slice(0,10)}</p>
          <p>Max-Reservations: {meal.max_reservations}</p>
          <p className="mealPrice">{`Price: ${meal.price} DKK`}</p>
          
          </>
          
        )
      }

        {!showDetails && (
        <p className="mealPrice">{`Price: ${meal.price} DKK`}</p>
      )}
    

      {showReserveButton && (
        <Link href={`/meals/${meal.id}`}><button className="reserveButton">Reserve Meal</button></Link>
      )}

  

     

    </>
  );
}

export default Meal;
