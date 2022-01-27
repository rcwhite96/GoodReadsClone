import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, NavLink, useHistory } from 'react-router-dom'
import { getOne } from  '../../store/shelf'
import {removeShelf} from '../../store/shelf'

export default function OneShelfPage(){
    let dispatch = useDispatch()
    let currentShelf = useSelector(state => state.shelf.oneShelf)
    const sessionUser= useSelector(state => state.session.user)
    const {shelfId} = useParams()
    const history = useHistory()
    console.log(currentShelf?.Media[0])
    console.log("AAAAAAAAAAAAAAAAAA")

    useEffect(() => {
        dispatch(getOne(shelfId))
    }, [dispatch])

    const shelfMedia = currentShelf?.Media.map((media, idx) =>
    <div key={idx}>
        <NavLink key={idx} to={`/media/${media.id}`}>
            <div className="image-container">
                <img className="media-image" src={media.imageURL} alt="media-img"/>
                <div className="title">{media.title}</div>
            </div>
        </NavLink>
    </div>)

    const handleDelete = async(shelfId) => {
        await dispatch(removeShelf(shelfId))
        history.push('/shelves')
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
            <div>{shelfMedia}</div>
            <div>
                <NavLink to={`/shelves/${shelfId}/edit-shelf`} >
                    <button className="nav-btn">Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(shelfId)} className="nav-btn">Delete</button>
            </div>
        </>
    )
}
