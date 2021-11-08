import React from "react";
import BeehiveCard from "./BeehiveCard"

function BeehivesContainer({ beehives }) {
    return (
        <div>
            <h1>Beehives</h1>
            {beehives.map(beehive => <BeehiveCard key={beehive.id} beehive={beehive} />)}
        </div>
    )

}

export default BeehivesContainer;