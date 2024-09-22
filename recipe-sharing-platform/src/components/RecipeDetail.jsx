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
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc pl-6 mb-4">
        {/* You can replace this with actual ingredients in your data */}
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
      <p className="text-lg leading-relaxed">
        {/* Replace this with actual instructions in your data */}
        Step-by-step instructions for preparing the dish go here.
      </p>
    </div>
  );
}
