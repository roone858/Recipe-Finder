import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FavButton from "../Buttons/FavButton";

export default function MealCard({
  idMeal,
  strMealThumb,
  strMeal,
  ingredientString,
  strCategory,
  strArea,
}) {
  const navigate = useNavigate();
  const handleDetailsButton = (id) => {
    navigate("/meals/" + id);
  };
  return (
    <Card key={idMeal} className="my-2 shadow" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>{ingredientString}</Card.Text>
      </Card.Body>

      <Card.Body className="d-flex justify-content-between">
        <Button variant="dark" onClick={() => handleDetailsButton(idMeal)}>
          DETAILS
        </Button>
        <FavButton
          meal={{
            idMeal,
            strMealThumb,
            strMeal,
            ingredientString,
            strCategory,
            strArea,
          }}
        />
      </Card.Body>
    </Card>
  );
}
