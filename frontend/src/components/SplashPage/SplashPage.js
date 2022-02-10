import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import './SplashPage.css'
import { getShelves } from  '../../store/shelf'

export default function SplashPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShelves())
    },[dispatch])

    return(
        <>
            <h1>Check Out Cyberpunk Media Today</h1>
            <p className="desc">Explore various cyberpunk media, whether it be books, games, movies or TV. Add your favorites to your shelves and let other users know if you enjoyed them!</p>
            
        </>
    )
}
