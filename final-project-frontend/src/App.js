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

  const handleDelete = async (id) => {
    let resp = await fetch(`http://localhost:9292/beehives/${id}`, {
      method: "DELETE",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    })
    let beehiveData = await resp.json() 
    let beehiveAfterDelete = beehives.filter(beehive => beehive.id !== id)
    setBeehives([...beehiveAfterDelete])
  }

  const handleLike = async (beehive) => {
    let likedBeehive = beehives.map(selectedBeehive => {
      if(selectedBeehive.id === beehive.id){
        return selectedBeehive.likes += 1
      }
    })
  
    let params = {
        likes: beehive.likes + 1
    }
    let resp = await fetch(`http://localhost:9292/beehives/${beehive.id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    let beehiveData = await resp.json()
    setBeehives([...likedBeehive])
  }

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
