import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, NavLink } from 'react-router-dom'
import { getOne } from  '../../store/shelf'
import {removeShelf} from '../../store/shelf'

export default function OneShelfPage(){
    let dispatch = useDispatch()
    let currentShelf = useSelector(state => state.shelf.oneShelf)
    const sessionUser= useSelector(state => state.session.user)
    const {shelfId} = useParams()

    useEffect(() => {
        dispatch(getOne(shelfId))
    }, [dispatch])

    const handleDelete = (shelfId) => {
        dispatch(removeShelf(shelfId))
    }

    if(!sessionUser){
        return <Redirect to='/'/>
    }

    return(
        <>
            <div className="all-container">
                <div className="info-container">
                    <div className="single-title">{currentShelf?.title}</div>
                </div>
            </div>
            <div>
                <NavLink to={`/shelf/${shelfId}/edit-shelf`} >
                    <button className="nav-btn">Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(shelfId)} className="nav-btn">Delete</button>
            </div>
        </>
    )
}
