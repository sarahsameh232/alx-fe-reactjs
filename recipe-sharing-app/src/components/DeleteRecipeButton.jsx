import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from "../components/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();
  
    const handleDelete = () => {
      deleteRecipe(recipeId);
      navigate('/'); // Navigate to the recipe list page after deletion
    };
  
    return (
      <button onClick={handleDelete}>
        Delete Recipe
      </button>
    );
  };
  
  export default DeleteRecipeButton;