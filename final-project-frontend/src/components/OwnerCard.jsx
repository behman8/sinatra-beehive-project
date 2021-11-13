import React from "react";

function OwnerCard({ owner }) {

    return (
        <div className="owner-info">
            <p>{owner.first_name} {owner.last_name}</p>
        </div>
    )
}

export default OwnerCard;