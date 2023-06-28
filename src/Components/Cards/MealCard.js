import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

      <Card.Body>
        <Button variant="dark" onClick={() => handleDetailsButton(idMeal)}>
          DETAILS
        </Button>
      </Card.Body>
    </Card>
  );
}
