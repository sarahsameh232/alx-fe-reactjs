import React from "react";
import { useRecipeStore } from "../components/recipeStore";

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
      filterRecipes(); // Trigger filtering when the search term changes
    };
  
    return (
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
      />
    );
  };
  
  export default SearchBar;