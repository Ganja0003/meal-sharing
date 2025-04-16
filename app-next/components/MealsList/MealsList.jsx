"use client"
import { useEffect, useState } from "react";
import Meal from './Meal.jsx'
import styles from '../HomePage/HomePage.css'

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
    
    <div className="mealContainer">
      <div className="pageTitle">
        <h1>Meals Project</h1>
      </div>
      
      <div className="mealCardContainer">
      {meals.map((meal, index) => {
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
