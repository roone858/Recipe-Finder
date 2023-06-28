import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import CategoryCard from "../Cards/CategoryCard";
import { Store } from "../../App";
import { useNavigate } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState();
  const { value, setValue } = useContext(Store);
  const navigate = useNavigate();
  const handleShowAllCategories = () => {
     navigate("/categories")
  };
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="py-3 border">
      <div className="header d-flex justify-content-center align-items-center flex-column flex-wrap">
        <h2 className="text-align-center">Categories</h2>
        <p style={{ color: "gray" }}>
          Discover the recipes you desire by browsing through the categories
        </p>
      </div>
      <div className="categories d-flex justify-content-between flex-wrap">
        {categories?.slice(0, 6)?.map((cate) => (
          <CategoryCard
            key={cate.idCategory}
            idCategory={cate.idCategory}
            strCategoryThumb={cate.strCategoryThumb}
            strCategory={cate.strCategory}
            strCategoryDescription={cate.strCategoryDescription}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 p-2">
        <Button onClick={handleShowAllCategories} className="w-50">
          Show all Categories
        </Button>
      </div>
    </Container>
  );
}
