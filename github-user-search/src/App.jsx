import React, { useState } from 'react';
import { fetchGitHubUser } from './services/githubService';
import UserCard from './components/UserCard'; // Import the new component

function App() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    const data = await fetchGitHubUser(username);
    setUserData(data);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      {userData && <UserCard user={userData} />}  {/* Use the new component */}
    </div>
  );
}

export default App;
