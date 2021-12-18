import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import { getOne } from  '../../store/shelf'

export default function AllShelvesPage(){
    let dispatch = useDispatch()
    let allShelf = useSelector(state => state.shelves)

    const all = allShelf?.map((shelf, index) =>
    <NavLink key={index} to={`/shelves/${shelf.id}`}>
        <div>{shelf.title}</div>
    </NavLink>)

    useEffect(() => {
        dispatch(getOne())
    },[dispatch])

    return (
        <div>{all}</div>
    )
}
