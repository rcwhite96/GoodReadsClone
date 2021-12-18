import React from "react";
import{ NavLink } from 'react-router-dom'

export default function SplashPage(){
    return(
        <>
            <h1>Check Out Cyberpunk Media Today</h1>
            <div className="btn-div">
                <NavLink to="/media">
                    <button className="media-btn">See Media</button>
                </NavLink>
            </div>
        </>
    )
}
