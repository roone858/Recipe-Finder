import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./Pages/SearchResult";
import NavBar from "./Layouts/Navbar";
import React, { createContext, useState, useContext } from "react";
import Categories from "./Pages/Categories";
import DisplayMeals from "./Components/DisplayMeals";
import MealDetails from "./Components/MealDetails";
import Favorites from "./Pages/Favorites";
import {
  FavoritesProvider,
 
} from "./Components/FavoritesContext";
export const Store = createContext();
function App() {
  const [value, setValue] = useState();
  const updateValue = (x) => setValue(x);

  return (
    <Store.Provider value={{ value, updateValue }}>
      <BrowserRouter>
        <NavBar />
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/meals" element={<DisplayMeals meals={value} />} />
            <Route path="/meals/:id" element={<MealDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites/>} />
          </Routes>
        </FavoritesProvider>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
