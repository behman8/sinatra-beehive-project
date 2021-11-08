import React from "react";

function BeehiveCard({ beehive }) {
    return (
        <div>
            {beehive.queen_name} - {beehive.owner.first_name} {beehive.owner.last_name}
        </div>
    )

}

export default BeehiveCard;