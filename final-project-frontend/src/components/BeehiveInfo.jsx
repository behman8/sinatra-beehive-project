import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import BeehiveCard from "./BeehiveCard";

function BeehiveInfo() {

    const [beehives, setBeehives] = useState([])
    const [beehive, setBeehive] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch("http://localhost:9292/beehives")
        .then(resp => resp.json())
        .then(data => setBeehives([...data]))
    }, [])

    useEffect(() => {
        if(!!beehives) {
            let selectedBeehive = beehives.find(beehive => beehive.id === Number(id))
            setBeehive({...selectedBeehive})
        }
    }, [setBeehive, id, beehives])

    return (
        <div> 
            <div>
                <h3>Queen's name:</h3>
                {beehive.queen_name}
                <h3>Owner:</h3>
                {beehive.owner.first_name} {beehive.owner.last_name}
                <h3>Type of Bees:</h3>
                {beehive.type_of_bees}
                <h3>Number of Boxes:</h3>
                {beehive.number_of_boxes}
            </div>
        </div>
    )

}

export default BeehiveInfo;