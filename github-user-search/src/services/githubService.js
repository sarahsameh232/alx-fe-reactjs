import axios from "axios";

// GitHub API base URL
const API_BASE_URL = "https://api.github.com/search/users?q";

/**
 * Fetch GitHub users based on search criteria
 * @param {Object} options - Search options containing searchTerm, location, minRepos, and page number
 * @returns {Array} List of GitHub users
 */
export const fetchUsers = async ({
  searchTerm,
  location,
  minRepos,
  page = 1,
}) => {
  // Build the query string based on the search criteria
  let query = `${searchTerm ? `${searchTerm} in:login` : ""}`;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  // Build the final URL with the query and pagination parameters
  const url = `${API_BASE_URL}?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=30`;

  try {
    // Send the HTTP GET request using axios
    const response = await axios.get(url);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};
