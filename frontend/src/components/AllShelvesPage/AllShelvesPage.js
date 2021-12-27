import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import { getShelves } from  '../../store/shelf'
import './AllShelves.css'

export default function AllShelvesPage(){
    let dispatch = useDispatch()
    let allShelf = useSelector(state => state.shelf.shelves)

    const shelfList = allShelf?.map((shelf, index) =>
        <NavLink key={index} to={`/shelves/${shelf.id}`}>
            <div className="shelf-container">
                <div className="shelf-title">{shelf.title}</div>
            </div>
        </NavLink>
    )

    useEffect(() => {
        dispatch(getShelves())
    },[dispatch])

    return (
        <>
            <div >{shelfList}</div>
            <NavLink to="/shelves/add-shelf">
                <button className="nav-btn">Add Shelf</button>
            </NavLink>
        </>
    )
}
