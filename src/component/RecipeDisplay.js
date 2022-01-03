import React from "react";

function RecipeDisplay({ title, image }) {
  return (
    <div className="recipeDisplay">
      <img src={["recipe"]["image"]} />
      <p>{title["recipe"]["label"]}</p>;<p>Ingredients</p>
    </div>
  );
}

export default RecipeDisplay;
