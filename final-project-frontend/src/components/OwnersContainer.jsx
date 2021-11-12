import React, {useState, useEffect} from "react";

function OwnersContainer() {

    const [owner, setOwner] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/beehives")
        .then(resp => resp.json())
        .then(data => {
            setOwner([...data])
        })
    }, [])

    return (
        <div>
            <h1>Owners</h1>
        </div>
    )

}

export default OwnersContainer;