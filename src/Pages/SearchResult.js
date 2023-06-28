import React, { useContext, useEffect, useState } from "react";
import { Store } from "../App";
import { Container } from "react-bootstrap";

import Search from "../Components/Form/Search";
import MealCard from "../Components/Cards/MealCard";
export default function SearchResult() {
  const [arr, setArr] = useState([]);
  const store = useContext(Store);
  useEffect(() => {
    setArr(store.value);
  }, [arr, store]);
  return (
    <Container>
      <div>
        <Search />
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        {arr ? (
          arr.map((meal) => {
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
