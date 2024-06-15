import React from "react";
import MealCard from "./MealCard";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    loading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(meals);

  if (loading) {
    return <p className="center">Fetcing meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error}/>;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealCard meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
