import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'
import {removeReview, getReviews} from '../../store/review'
import parse from 'html-react-parser';


export default function Reviews({title, content, sessionUser, revSessionUser, reviewId}){
    let dispatch = useDispatch()
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const handleDelete = (reviewId) => {
        dispatch(removeReview(reviewId))
        window.location.reload()
    }

    return(
        <>
            <div className="review-title">{title}</div>
            <div className="review-content">{parse(content)}</div>
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
