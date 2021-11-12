import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <h1>Bee Owners</h1>
                    <p>
                        <NavLink to="/">Home</NavLink> | <NavLink to="/owners">Owners</NavLink> | <NavLink to="/beehives">Beehives</NavLink>
                    </p>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;