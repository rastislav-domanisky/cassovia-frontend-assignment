import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import SearchScreen from 'screens/SearchScreen';
import MainScreen from 'screens/MainScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/city/:id" component={MainScreen} exact />
          <Route path="/" component={SearchScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
