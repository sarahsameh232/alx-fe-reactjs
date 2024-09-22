import React, { useState } from 'react';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let tempErrors = {};
    if (!title) tempErrors.title = "Recipe title is required.";
    if (!ingredients) {
      tempErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        tempErrors.ingredients = "Please list at least two ingredients.";
      }
    }
    if (!steps) tempErrors.steps = "Preparation steps are required.";

    return tempErrors;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // If no validation errors, proceed
    const ingredientsList = ingredients.split('\n').filter(item => item.trim());
    
    const recipeData = {
      title,
      ingredients: ingredientsList,
      steps
    };

    console.log('New Recipe:', recipeData);

    // Clear the form and errors after successful submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 md:p-10 md:w-1/2 md:mx-auto">
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="ingredients">
            Ingredients (Enter each ingredient on a new line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
            placeholder="Enter ingredients"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' : ''}`}
            placeholder="Enter preparation steps"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:w-1/3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
