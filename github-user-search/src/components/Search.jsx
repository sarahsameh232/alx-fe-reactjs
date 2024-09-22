import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import fetchUserData

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Manage search input
  const [location, setLocation] = useState(""); // Manage location input
  const [minRepos, setMinRepos] = useState(""); // Manage minimum repos input
  const [userData, setUserData] = useState([]); // Store GitHub user data (array of users)
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear any previous error
    setUserData([]); // Clear any previous user data

    try {
      const data = await fetchUserData({ searchTerm, location, minRepos }); // Call fetchUserData
      setUserData(data); // Set user data on success
    } catch (err) {
      setError("Looks like we cant find the user"); // Set error on failure
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      {/* Search form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter GitHub username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g. San Francisco)"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Min Repositories
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum Repos"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </form>
      {/* Conditional rendering: loading, error, and user data */}
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message */}
      {userData.length > 0 && (
        <div>
          {userData.map((user) => (
            <div key={user.id}>
              <h3>{user.login}</h3>
              <img src={user.avatar_url} alt="User Avatar" />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
