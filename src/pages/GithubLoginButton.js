// GithubLoginButton.js
import React from 'react';

const GithubLoginButton = ({ onLogin }) => {
  const handleLogin = () => {
    // Use your GitHub OAuth app client ID
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const redirectUri = `${window.location.origin}/callback`;

    // Redirect to GitHub for authentication
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};

export default GithubLoginButton;
