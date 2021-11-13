import React, {useState, useEffect} from "react";
import OwnerCard from "./OwnerCard";

function OwnersContainer() {

    const [owners, setOwners] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/owners")
        .then(resp => resp.json())
        .then(data => {
            setOwners([...data])
        })
    }, [])

    return (
        <div className="owner">
            <h1>Owners</h1>
            {owners.map(owner => <OwnerCard owner={owner}/>)}
        </div>
    )

}

export default OwnersContainer;