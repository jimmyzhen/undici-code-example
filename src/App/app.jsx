import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App container">
          <div className="row justify-content-center">
            <Switch>
              <Route
                path="/"
                exact
                component={LandingPage}
              />
              <Route
                path="/details"
                component={DetailsPage}
              />
              
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/details">Go to Details Page</Link>
    </div>
  );
}

function DetailsPage() {
  return (
    <div>
      <h1>Details Page</h1>
      <Link to="/">Back</Link>
    </div>
  );
}
