import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams} from 'react-router-dom'
import { getOne } from  '../../store/media'
import './OneMediaPage.css'

export default function OneMediaPage(){
    let dispatch = useDispatch()
    let currentMedia = useSelector(state => state.media.oneMedia)
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getOne(mediaId))
    }, [dispatch])


    return(
        <div className="all-container">
            <img className="one-media-image" src={currentMedia?.imageURL} alt="media-img"/>
            <div className="info-container">
                <div className="single-title">{currentMedia?.title}</div>
                <div className="info">Creator: {currentMedia?.creator}</div>
                <div className="info">Media Type: {currentMedia?.mediaType}</div>
                <div className="info">Description: {currentMedia?.description}</div>
            </div>
            <div>
                <NavLink to={`/media/${mediaId}/add-review`}>
                <button className="nav-btn">Add Review</button>
                </NavLink>
            </div>
        </div>
    )
}
