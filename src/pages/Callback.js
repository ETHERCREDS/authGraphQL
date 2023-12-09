// Callback.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Callback = ({ onToken }) => {
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Use the code to obtain the access token from GitHub
      // Make a request to your server to exchange the code for an access token
      // Example: Use a serverless function or a backend server for this purpose

      // For simplicity, assume you have an API endpoint to exchange the code for an access token
      fetch(`/api/github/callback?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            onToken(data.access_token);
          }
        })
        .catch((error) => {
          console.error('Error exchanging code for access token:', error);
        });
    }

    // Redirect back to the home page
    history.push('/');
  }, [onToken, history]);

  return <div>Logging in...</div>;
};

export default Callback;
