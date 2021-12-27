import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import { getShelves } from  '../../store/shelf'

export default function AllShelvesPage(){
    let dispatch = useDispatch()
    let allShelf = useSelector(state => state.shelves)

    const shelfList = allShelf?.map((shelf, index) =>
        <NavLink key={index} to={`/shelves/${shelf.id}`}>
            <div>{shelf.title}</div>
        </NavLink>
    )

    useEffect(() => {
        dispatch(getShelves())
    },[dispatch])

    return (
        <>
            <NavLink to="/shelves/add-shelf">
                <button className="nav-btn">Add Shelf</button>
            </NavLink>
            <div>{shelfList}</div>
        </>
    )
}
