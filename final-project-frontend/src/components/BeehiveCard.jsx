import React from "react";
import {NavLink} from "react-router-dom"

function BeehiveCard({ beehive, handleDelete, handleLike }) {

    
    return (
        <div>
            <NavLink to={`/beehives/${beehive.id}`}>{beehive.queen_name}</NavLink> - {beehive.owner.first_name} {beehive.owner.last_name}
            <br></br>
            <p>Likes: {beehive.likes}</p>
            <button onClick={(e) => handleLike(beehive)}><span role="img" aria-label="thumbs-up">👍</span></button>
            <button onClick={(e) => handleDelete(beehive.id)}>Delete hive <span role="img" aria-label="sad-face">😢</span> </button>
        </div>
    )

}

export default BeehiveCard;