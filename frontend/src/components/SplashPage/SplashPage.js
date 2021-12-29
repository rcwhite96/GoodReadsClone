import React from "react";
import{ NavLink } from 'react-router-dom'
import './SplashPage.css'
import logo from './pngaaa.com-3543360.png'

export default function SplashPage(){
    return(
        <>
            <h1>Check Out Cyberpunk Media Today</h1>
            <p className="desc">Explore various cyberpunk media, whether it be books, games, movies or TV. Add your favorites to your shelves and let other users know if you enjoyed them!</p>
            <div className="logo-container"><img src={logo} alt="logo" className="logo"/></div>
            <div className="btn-div">
                <NavLink to="/media">
                    <button className="media-btn">See Media</button>
                </NavLink>
            </div>
        </>
    )
}
