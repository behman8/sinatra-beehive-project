import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import BeehiveCard from "./BeehiveCard";

function BeehiveInfo({ beehives }) {

    const [beehive, setBeehive] = useState({})
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        if(!!beehives) {
            let selectedBeehive = beehives.find(beehiveData => beehiveData.id === Number(id))
            setBeehive({...selectedBeehive})
        }
    }, [setBeehive, id, beehives ])

    return (
        <div>
            {!!beehive.id ? 
            <div>
                <BeehiveCard beehive={beehive}/>
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