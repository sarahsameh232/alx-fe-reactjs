import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    setError(""); // Reset error message
    setUserData(null); // Reset user data

    try {
      const data = await fetchUserData(searchTerm); // API call to GitHub
      setUserData(data); // Set user data on success
    } catch (err) {
      setError("Looks like we can’t find the user"); // Set error message on failure
    } finally {
      setLoading(false); // Stop loading indicator
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
      {error && <p>{error}</p>} {/* Error message for user not found */}
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
