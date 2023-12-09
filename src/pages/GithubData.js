// GithubData.js
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GITHUB_DATA } from './queries'; // Define your GraphQL query

const GithubData = ({ token }) => {
  const { loading, error, data } = useQuery(GET_GITHUB_DATA, {
    variables: { token },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { commitCount, pullRequestCount } = data.repository.defaultBranchRef.target.history;

  // Render your chart with commitCount and pullRequestCount data
  // Example: Use react-chartjs-2 or any other charting library

  return (
    <div>
      <h2>GitHub Data</h2>
      <p>Commits: {commitCount}</p>
      <p>Pull Requests: {pullRequestCount}</p>
    </div>
  );
};

export default GithubData;
