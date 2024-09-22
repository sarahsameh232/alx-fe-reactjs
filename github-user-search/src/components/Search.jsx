import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(searchTerm); // Call the API
      setUserData(data); // Set user data if found
    } catch (err) {
      setError("Looks like we can’t find the user"); // Error handling
    } finally {
      setLoading(false); // Turn off loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>} {/* Loading state */}
      {error && <p>{error}</p>} {/* Error state */}
      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} alt="User Avatar" />
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
