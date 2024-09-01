import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],
  
    // Existing actions
    addRecipe: (newRecipe) =>
      set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    deleteRecipe: (id) =>
      set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      })),
    updateRecipe: (updatedRecipe) =>
      set((state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
      })),
  
    // New actions for favorites and recommendations
    addFavorite: (recipeId) =>
      set((state) => ({
        favorites: [...state.favorites, recipeId],
      })),
    removeFavorite: (recipeId) =>
      set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
      })),
    generateRecommendations: () =>
      set((state) => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(
          (recipe) =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),
  }));
  
  export { useRecipeStore };