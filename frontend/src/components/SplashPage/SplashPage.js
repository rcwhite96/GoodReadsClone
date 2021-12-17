import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'

export default function SplashPage(){
    return(
        <NavLink to="/media">
            <button className="nav-btn">See Media</button>
        </NavLink>
    )
}
