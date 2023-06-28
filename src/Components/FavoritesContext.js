import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (meal) => {
    setFavorites([...favorites, meal]);
  };

  const removeFromFavorites = (mealId) => {
    setFavorites(favorites.filter((meal) => meal.idMeal !== mealId));
  };

  const isFavorite = (mealId) => {
    return favorites.some((meal) => meal.idMeal === mealId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
