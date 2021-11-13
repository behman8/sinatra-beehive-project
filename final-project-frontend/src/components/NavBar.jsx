import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <p>
                    <NavLink exact to="/" activeStyle={{color: "black"}}>Home</NavLink> | <NavLink to="/owners" activeStyle={{color: "black"}}>Owners</NavLink> | <NavLink to="/beehives" activeStyle={{color: "black"}}>Beehives</NavLink>
                </p>
            </div>
        </nav>
    )

}

export default Navbar;