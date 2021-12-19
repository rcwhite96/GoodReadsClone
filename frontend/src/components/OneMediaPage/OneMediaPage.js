import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, NavLink } from 'react-router-dom'
import { getOne } from  '../../store/media'
import { getReviews } from '../../store/review'
import './OneMediaPage.css'

export default function OneMediaPage(){
    let dispatch = useDispatch()
    let currentMedia = useSelector(state => state.media.oneMedia)
    let mediaReviews = useSelector(state => state.reviews)
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getOne(mediaId))
    }, [dispatch])

    useEffect(() => {
        dispatch(getReviews(mediaId))
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
                <div>{mediaReviews?.content}</div>
            </div>
        </div>
    )
}
