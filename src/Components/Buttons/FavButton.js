import React, { useState, useEffect, useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { FavoritesContext } from "../FavoritesContext";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function FavButton({ meal }) {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } =
    useContext(FavoritesContext);
  function handleToggleChange() {
    if (isFavorite(meal.idMeal)) {
      removeFromFavorites(meal.idMeal);
    } else {
      addToFavorites(meal);
    }
  }

  return (
    <div>
      <Checkbox
        onChange={handleToggleChange}
        checked={isFavorite(meal.idMeal)}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </div>
  );
}
