import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">Add Recipe</Link></li>
              <li><Link to="/favorites">My Favorites</Link></li>
              <li><Link to="/recommendations">Recommendations</Link></li>
            </ul>
          </nav>
          <SearchBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default App;