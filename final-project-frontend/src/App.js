import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";
import WelcomePage from './components/WelcomePage';
import BeehivesContainer from './components/BeehivesContainer';
import OwnersContainer from './components/OwnersContainer';
import NavBar from './components/NavBar';
import BeehiveForm from './components/BeehiveForm';
import BeehiveInfo from './components/BeehiveInfo';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/owners" >
            <OwnersContainer/>
          </Route>
          <Route exact path="/beehives" >
            <BeehivesContainer beehives={beehives} handleDelete={handleDelete} handleLike={handleLike}/>
          </Route>
          <Route path="/beehiveform">
            <BeehiveForm addNewBeehive={addNewBeehive} />
          </Route>
          <Route exact path="/beehives/:id" >
            <BeehiveInfo beehives={beehives} />
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
