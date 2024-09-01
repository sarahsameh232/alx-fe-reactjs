import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // Import SearchBar component
import './App.css'; // Optional: Import a CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Optional: Wrap everything in a container div */}
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">Add Recipe</Link></li>
            </ul>
          </nav>
          <SearchBar /> {/* Add SearchBar globally */}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="*" element={<NotFound />} /> {/* Handle undefined routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Optional: A simple NotFound component for undefined routes
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