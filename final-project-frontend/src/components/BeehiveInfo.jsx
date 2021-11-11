import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import BeehiveCard from "./BeehiveCard";

function BeehiveInfo({ beehives }) {

    const [beehive, setBeehive] = useState({})
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        if(!!beehives) {
            let selectedBeehive = beehives.find(beehive => beehive.id === Number(id))
            setBeehive({...selectedBeehive})
        }
    }, [setBeehive, id, beehives])

    return (
        <div>
            {!!beehive.id ? 
            <div>
                {beehive.queen_name} - {beehive.owner.first_name} {beehive.owner.last_name}
                <br></br>
                <p>Likes: {beehive.likes}</p>
            </div>
            :
            <div>
                loading
            </div>
            }
        </div>
    )

}

export default BeehiveInfo;