"use client";
import { useEffect, useState } from "react";
import Meal from "./Meal.jsx";


// This page can be deleted once you add your own page
function MealsList({slice}) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://127.0.0.1:3001/api/meals");
      const data = await response.json();
      setMeals(data);
    }

    fetchMeals();
  }, []);

  const mealsToRender = slice ? meals.slice(0,3) : meals;
  return (
    <div className="mealContainer">
      <div className="mealCardContainer">
        {mealsToRender.map((meal, index) => {
          return (
            <div className="mealCard">
              <Meal key={index} meal={meal} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MealsList;
