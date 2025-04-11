"use client"
import { useEffect, useState } from "react";

// This page can be deleted once you add your own page
function MealsList() {
  
  const [meals,setMeals] = useState([])
  
  useEffect(() =>{
    
   async function fetchMeals(){
      const response = await fetch('http://127.0.0.1:3001/api/meals');
      const data = await response.json();
      setMeals(data)
    }

    fetchMeals()
  },[])

  
  return (
    
    <>
      <h1>Meals Project</h1>
      {meals.map((meal, index) => {
      return (
      <div key={index}>
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
  );
})}
    </>
  );
  
}

export default MealsList;
