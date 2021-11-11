import React from "react";
import BeehiveCard from "./BeehiveCard"

function BeehivesContainer() {

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
    let beehivePostDelete = beehives.filter(beehive => beehive.id !== id)
    setBeehives([...beehivePostDelete])
    let resp = await fetch(`http://localhost:9292/beehives/${id}`, {
      method: "DELETE",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    })
  }

  const handleLike = async (beehive) => {
    let likedBeehive = beehives.map(hive => {
      if(hive.id === beehive.id){
        hive.likes = beehive.likes + 1
        return hive
      } else {
        return hive
      }
    })
    let params = {
      likes: beehive.likes
    }
    setBeehives([...likedBeehive])
    let resp = await fetch(`http://localhost:9292/beehives/${beehive.id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    let beehiveData = await resp.json()
  }

    return (
        <div>
            <h1>Beehives</h1>
            {beehives.map(beehive => <BeehiveCard key={beehive.id} beehive={beehive} handleDelete={handleDelete} handleLike={handleLike}/>)}
        </div>
    )

}

export default BeehivesContainer;