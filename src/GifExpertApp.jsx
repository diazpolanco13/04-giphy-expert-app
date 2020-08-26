import React, { useState } from "react";
import AppCategory from "./Components/AppCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Casa"]);

  return (
    <div>
      <h2 className="text-3xl pb-4 font-bold" >GifsApp</h2>
      <AppCategory setCategories={setCategories} categories={categories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
