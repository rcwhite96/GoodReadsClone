import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, NavLink, useHistory } from 'react-router-dom'
import { getOne } from  '../../store/shelf'
import {removeShelf} from '../../store/shelf'
import {remove} from '../../store/shelfMedia'

export default function OneShelfPage(){
    let dispatch = useDispatch()
    let currentShelf = useSelector(state => state.shelf.oneShelf)
    const sessionUser= useSelector(state => state.session.user)
    const {shelfId} = useParams()
    const history = useHistory()
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getOne(shelfId))
    }, [dispatch])

    const handleMediaDelete = async(mediaId) => {
        await dispatch(remove(mediaId))
        history.push('/shelves')
    }

    const shelfMedia = currentShelf?.Media.map((media, idx) =>
    <div key={idx}>
        <NavLink key={idx} to={`/media/${media.id}`}>
            <div className="image-container">
                <img className="media-image" src={media.imageURL} alt="media-img"/>
                <div className="title">{media.title}</div>
                <button onClick={() => handleMediaDelete(media.id)} className="nav-btn">Delete</button>
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
            <div className='media-container'>{shelfMedia}</div>
            <div>
                <NavLink to={`/shelves/${shelfId}/edit-shelf`} >
                    <button className="nav-btn">Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(shelfId)} className="nav-btn">Delete</button>
            </div>
        </>
    )
}
