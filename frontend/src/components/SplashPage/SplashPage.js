import React from "react";
import{ NavLink } from 'react-router-dom'

export default function SplashPage(){
    return(
        <NavLink to="/media">
            <button className="nav-btn">See Media</button>
        </NavLink>
    )
}
