import React, { useState } from "react";
import MealCard from "./MealCard";
import { useEffect } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
      <ul id="meals">
        {meals.map((meal) => (
          <MealCard meal={meal} key={meal.id} />
        ))}
      </ul>
  );
};

export default Meals;
