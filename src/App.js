import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubLoginButton from './GithubLoginButton';
import Callback from './Callback';
import GithubData from './GithubData';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/callback">
          <Callback onToken={setToken} />
        </Route>
        <Route path="/">
          {token ? (
            <GithubData token={token} />
          ) : (
            <GithubLoginButton />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;