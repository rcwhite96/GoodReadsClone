import React from "react";
import{ NavLink } from 'react-router-dom'

export default function SplashPage(){
    return(
        <>
            <h1>Check Out Cyberpunk Media Today</h1>
            <img src='/home/rachel/Desktop/AppAcademy/the-net-archives/frontend/src/components/SplashPage/pngaaa.com-3543360.png' alt="futuristic-design"/>
            <div className="btn-div">
                <NavLink to="/media">
                    <button className="media-btn">See Media</button>
                </NavLink>
            </div>
        </>
    )
}
