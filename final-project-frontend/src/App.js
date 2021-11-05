import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React, {useState, useEffect} from "react"
import WelcomePage from './components/WelcomePage';
import BeehivesContainer from './components/BeehivesContainer';
import OwnersContainer from './components/OwnersContainer';
import NavBar from './components/NavBar';
import BeehiveForm from './components/BeehiveForm';

function App() {

  const [beehives, setBeehives] = useState([])
  
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/owners" ><OwnersContainer/></Route>
          <Route path="/beehives" ><BeehivesContainer beehives={beehives} requesting={requesting} /></Route>
          <Route path="/beehiveform"><BeehiveForm /></Route>
          <Route exact path="/" ><WelcomePage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
