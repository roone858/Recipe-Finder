import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import CategoryCard from "../Components/Cards/CategoryCard";
export default function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="Categories">
      <div className="categories d-flex justify-content-between flex-wrap">
        {categories?.map((cate) => (
          <CategoryCard
            key={cate.idCategory}
            idCategory={cate.idCategory}
            strCategoryThumb={cate.strCategoryThumb}
            strCategory={cate.strCategory}
            strCategoryDescription={cate.strCategoryDescription}
          />
        ))}
      </div>
    </Container>
  );
}
