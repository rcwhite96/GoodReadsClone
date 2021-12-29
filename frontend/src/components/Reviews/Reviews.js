import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'
import {removeReview, getReviews} from '../../store/review'


export default function Reviews({title, content, sessionUser, revSessionUser, reviewId}){
    let dispatch = useDispatch()
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const handleDelete = (reviewId) => {
        dispatch(removeReview(reviewId))
        window.location.reload(true)
    }

    return(
        <>
            <div className="review-title">{title}</div>
            <div className="review-content">{content}</div>
            <div className="review-buttons">
            {(sessionUser.id === revSessionUser) ?
                <>
                <NavLink to={`/media/${mediaId}/edit-review/${reviewId}`}>
                    <button className="nav-btn">Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(reviewId)} className="nav-btn">Delete</button>
                </> : null}
            </div>
        </>
    )
}
