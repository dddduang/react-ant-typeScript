import React from 'react';
import './App.css';
import Container from './components/container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/layout" component={Container}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
