import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams} from 'react-router-dom'
import { getOne } from  '../../store/media'
import {removeReview} from '../../store/review'
import './OneMediaPage.css'

export default function OneMediaPage(){
    let dispatch = useDispatch()
    let currentMedia = useSelector(state => state.media.oneMedia)
    const {mediaId} = useParams()
    const {reviewId} = useParams()

    useEffect(() => {
        dispatch(getOne(mediaId))
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(removeReview(id))
    }

    const reviews = currentMedia?.Reviews.map((rev, index) =>
        <div key={index} className="review-div">
            <div className="review-title">{rev.title}</div>
            <div className="review-content">{rev.content}</div>
            <div className="review-buttons">
                <NavLink to={`/media/${mediaId}/edit-review`} >
                    <button className="nav-btn">Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(reviewId)} className="nav-btn">Delete</button>
            </div>
        </div>
    )


    return(
        <>
            <div className="all-container">
                <img className="one-media-image" src={currentMedia?.imageURL} alt="media-img"/>
                <div className="info-container">
                    <div className="single-title">{currentMedia?.title}</div>
                    <div className="info">Creator: {currentMedia?.creator}</div>
                    <div className="info">Media Type: {currentMedia?.mediaType}</div>
                    <div className="info">Description: {currentMedia?.description}</div>
                </div>
            </div>
            <div className="review-header">Reviews:</div>
            <div className="add-rev-container">
                <NavLink to={`/media/${mediaId}/add-review`}>
                    <button className="nav-btn">Add Review</button>
                </NavLink>
            </div>
                <div className="info">
                    {reviews}
            </div>
        </>
    )
}
