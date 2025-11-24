"use client";
import { useEffect, useState } from "react";
import Meal from "./Meal.jsx";

// This page can be deleted once you add your own page
function MealsList({ slice }) {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState('');
  const [sortDir, setSortDir] = useState('');

  console.log(sortDir);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        `http://127.0.0.1:3001/api/meals?sortKey=${sortKey}&sortDir=${sortDir}`
      );
      const data = await response.json();
      setMeals(data);
    }

    fetchMeals();
  }, [sortKey, sortDir]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = (event) => {
    setSortKey(event.target.value);
  };

  const mealsToRender = slice ? meals.slice(0, 3) : meals;
  return (
    <>
      <div className="searchSort">

        <div className="search">
          <input type="text" id="search" onChange={handleSearch} placeholder='Search for meals'/>
        </div>

        <div className="sortKey">
          <select name="sortKey" id="sortKey" onChange={handleSort}>
            <option value="when">Date</option>
            <option value="price">Price</option>
            <option value="max_reservations">Max Reservations</option>
          </select>
        </div>

        <div className="sortDir">
          <select name="sortDir" id="sortDir" onChange={(e) => setSortDir(e.target.value)}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

      </div>
      <div className="mealContainer">
        <div className="mealCardContainer">
          {mealsToRender
            .filter((meal) =>
              meal.title.toLowerCase().includes(search.toLowerCase())
                ? meal
                : ""
            )
            .map((meal, index) => {
              return (
                <div className="mealCard">
                  <Meal key={index} meal={meal} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MealsList;
