import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import WelcomePage from './components/WelcomePage';
import BeehivesContainer from './components/BeehivesContainer';
import OwnersContainer from './components/OwnersContainer';
import NavBar from './components/NavBar';
import BeehiveInfo from './components/BeehiveInfo';

function App() {

  return (
    <div className="App">
      <Router>
      <h1 className="header">Bee Owners</h1>
        <NavBar/>
        <Switch>
          <Route path="/owners" >
            <OwnersContainer/>
          </Route>
          <Route exact path="/beehives" >
            <BeehivesContainer/>
          </Route>
          <Route exact path="/beehives/:id" >
            <BeehiveInfo />
          </Route>
          <Route exact path="/" >
            <WelcomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
