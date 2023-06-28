import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import BackButton from "./Buttons/BackButton";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState();
  function parseRecipeSteps(recipe) {
    const steps = recipe.split("\r\n");
    const parsedSteps = [];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i].trim();

      if (step !== "") {
        parsedSteps.push(step);
      }
    }

    return parsedSteps;
  }

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const strIngredient = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        ingredients.push(meal["strIngredient" + i]);
      }
    }

    return ingredients.join(", ");
  };
  return (
    <Container>
     <BackButton/>
      <Card key={meal?.idMeal} className="my-2 shadow">
        <Card.Img
          style={{ height: "30rem" }}
          variant="top"
          src={meal?.strMealThumb}
        />
        <Card.Body>
          <Card.Title> Name : {meal?.strMeal}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span style={{ fontSize: "20px" }} className="font-4">
              Ingredient :
            </span>{" "}
            {meal?.strIngredient1 && strIngredient()}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={{ fontSize: "20px" }} className="font-4">
              Area :
            </span>{" "}
            {meal?.strArea}
          </ListGroup.Item>
          <ListGroup.Item>
            <span style={{ fontSize: "20px" }} className="font-4">
              Category :
            </span>{" "}
            {meal?.strCategory}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <h2>Steps :</h2>
          <Card.Text className="px-4" as="div">
            {meal?.strInstructions &&
              parseRecipeSteps(meal.strInstructions)?.map((step, index) => (
                <p key={index}>
                  <b>{index + 1}-</b> {step}{" "}
                </p>
              ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
