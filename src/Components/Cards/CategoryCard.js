import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useContext } from "react";

import { Store } from "../../App";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function CategoryCard({
  idCategory,
  strCategoryThumb,
  strCategory,
  strCategoryDescription,
}) {
  const { value, updateValue } = useContext(Store);
  const navigate = useNavigate();
  const handleShowAllMeals = (category) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => updateValue(res.data.meals))
      .catch((err) => console.log(err));
    navigate("/meals");
  };
  return (
    <Card key={idCategory} className="my-2 shadow" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strCategoryThumb} />
      <Card.Body>
        <Card.Title>{strCategory}</Card.Title>
        <Card.Text>
          {strCategoryDescription.length > 150
            ? strCategoryDescription.slice(0, 150) + "..."
            : strCategoryDescription}
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Button variant="dark" onClick={() => handleShowAllMeals(strCategory)}>
          Show All Meals
        </Button>
      </Card.Body>
    </Card>
  );
}
