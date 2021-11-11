import React from "react";
import {NavLink} from "react-router-dom"

function BeehiveCard({ beehive }) {

    const handleLike = async () => {
        let params = {
            likes: beehive.likes
        }
        let response = await fetch(`http://localhost:9292/beehives/${beehive.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })

    }
    return (
        <div>
            <NavLink to={`/beehives/${beehive.id}`}>{beehive.queen_name}</NavLink> - {beehive.owner.first_name} {beehive.owner.last_name}
            <br></br>
            <p>Likes: {beehive.likes}</p>
            <button onClick={handleLike}><span role="img" aria-label="thumbs-up">👍</span></button>
        </div>
    )

}

export default BeehiveCard;