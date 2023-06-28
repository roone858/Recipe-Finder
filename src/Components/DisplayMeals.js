import React from "react";
import { Container } from "react-bootstrap";

import MealCard from "../Components/Cards/MealCard";
export default function DisplayMeals({ meals }) {
 

     return (
          <Container>
           
            <div className="d-flex justify-content-between flex-wrap">
              {meals ? (
                meals.map((meal) => {
                  const ingredients = [];
                  for (let i = 1; i <= 20; i++) {
                    if (meal["strIngredient" + i]) {
                      ingredients.push(meal["strIngredient" + i]);
                    }
                  }
      
                  const ingredientString = ingredients.join(", ");
                  return (
                    <MealCard
                      key={meal.idMeal}
                      idMeal={meal.idMeal}
                      strMealThumb={meal.strMealThumb}
                      strMeal={meal.strMeal}
                      ingredientString={ingredientString}
                      strCategory={meal.strCategory}
                      strArea={meal.strArea}
                    />
                  );
                })
              ) : (
                <h1>no data</h1>
              )}
            </div>
          </Container>
        );
}
