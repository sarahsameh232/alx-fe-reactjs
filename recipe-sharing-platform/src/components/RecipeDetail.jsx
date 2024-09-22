import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch mock data from data.json
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {" "}
        {/* Added shadow to the card */}
        <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover mb-4 shadow-md rounded-lg"
        />{" "}
        {/* Added shadow-md here */}
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-6 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <p className="text-lg leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
}
