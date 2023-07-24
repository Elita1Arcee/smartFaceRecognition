import React from "react";
import './Navigation.css'

function Navigation({ onRouteChange }) {
    return (
        <nav>
            <p onClick={() => onRouteChange('signIn')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation;