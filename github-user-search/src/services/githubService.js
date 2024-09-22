import axios from 'axios';

const API_BASE_URL = 'https://api.github.com/search/users';

export const fetchUsers = async ({ searchTerm, location, minRepos }) => {
  let query = `${searchTerm ? `${searchTerm} in:login` : ''}`;
  
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `${API_BASE_URL}?q=${encodeURIComponent(query)}`;
  
  try {
    const response = await axios.get(url);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
