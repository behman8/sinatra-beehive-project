import React from "react";
import BeehiveCard from "./BeehiveCard"

function BeehivesContainer({ beehives, handleDelete, handleLike }) {
    return (
        <div>
            <h1>Beehives</h1>
            {beehives.map(beehive => <BeehiveCard key={beehive.id} beehive={beehive} handleDelete={handleDelete} handleLike={handleLike}/>)}
        </div>
    )

}

export default BeehivesContainer;