import React from "react";

import Search from "../Components/Form/Search";
import Cover from "../Components/Cover";
import Categories from "../Components/Sections/Categories";
export default function Home() {
  return (
    <>
        <Cover />
        <Search />
      <Categories />
    </>
  );
}
