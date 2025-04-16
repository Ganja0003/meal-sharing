
  function Meal({ meal }) {
    
  
    return (
      <>
        <h1 className="mealTitle">{meal.title}</h1>
        <p className="mealDescription">{meal.description}</p>
        <p className="mealPrice">{`Price: ${meal.price} DKK`}</p>
      </>
    );
  }
  

export default Meal;