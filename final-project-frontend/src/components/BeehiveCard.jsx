import React from "react";
import {NavLink} from "react-router-dom"

function BeehiveCard({ beehive, handleDelete, handleLike }) {

    
    return (
        <div className="beehive">
            <h3>Queen's Name:</h3>
                <NavLink to={`/beehives/${beehive.id}`}>{beehive.queen_name}</NavLink>
            <br></br>
            <h3>Owner:</h3>
                {beehive.owner.first_name} {beehive.owner.last_name}
            <p>Likes: {beehive.likes}</p>
            <button id="like-button" onClick={(e) => handleLike(beehive)}><span role="img" aria-label="thumbs-up">👍</span></button>
            <button id="delete-button" onClick={(e) => handleDelete(beehive.id)}>Delete hive <span role="img" aria-label="sad-face">😢</span> </button>
        </div>
    )

}

export default BeehiveCard;