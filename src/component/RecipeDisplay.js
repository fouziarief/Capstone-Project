import React from "react";

function RecipeDisplay(props) {
  return (
    <div className="recipeDisplay">
      <img src={props.recipe.image} />
      <p>{props.recipe.title}</p>;<p>Ingredients</p>
    </div>
  );
}

export default RecipeDisplay;
