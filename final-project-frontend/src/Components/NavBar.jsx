import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <h2>Bee Owners</h2>
                    <ul>
                        <NavLink to="/">Home</NavLink> | <NavLink to="/owners">Owners</NavLink> | <NavLink to="/beehives">Beehives</NavLink> | <NavLink to="/beehive-form">Add Beehive</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;