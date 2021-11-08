import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";
import WelcomePage from './components/WelcomePage';
import BeehivesContainer from './components/BeehivesContainer';
import OwnersContainer from './components/OwnersContainer';
import NavBar from './components/NavBar';
import BeehiveForm from './components/BeehiveForm';

function App() {

  const [beehives, setBeehives] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/beehives")
    .then(resp => resp.json())
    .then(data => setBeehives([...data]))
  }, []);

  const addNewBeehive = (beehiveData) => {
    let params = {...beehiveData}
    fetch("http://localhost:9292/beehives", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(resp => resp.json())
    .then(beehiveData => {
      setBeehives(prev => {
        return [...prev, beehiveData]
      })
    })
  }

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/owners" >
            <OwnersContainer/>
          </Route>
          <Route path="/beehives" >
            <BeehivesContainer beehives={beehives} />
          </Route>
          <Route path="/beehiveform">
            <BeehiveForm addNewBeehive={addNewBeehive} />
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
