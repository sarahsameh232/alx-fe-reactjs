import React, { useState } from 'react';
import { fetchGitHubUser } from './services/githubService';

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
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="avatar" />
          <a href={userData.html_url}>GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
