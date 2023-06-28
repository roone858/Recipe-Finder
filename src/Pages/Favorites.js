import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import MealCard from "../Components/Cards/MealCard";
import { FavoritesContext } from "../Components/FavoritesContext";
export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <Container 
    className="d-flex flex-wrap justify-content-evenly">
      {favorites.map((meal) => (
        <MealCard
          key={meal.idMeal}
          idMeal={meal.idMeal}
          strMealThumb={meal.strMealThumb}
          strMeal={meal.strMeal}
          strCategory={meal.strCategory}
          strArea={meal.strArea}
        />
      ))}
    </Container>
  );
}
