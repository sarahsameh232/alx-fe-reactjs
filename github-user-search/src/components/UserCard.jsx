import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.login}</h3>
      <img src={user.avatar_url} alt="User Avatar" />
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
