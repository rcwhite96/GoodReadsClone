import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams} from 'react-router-dom'
import { getOne } from  '../../store/media'
import {removeReview, oneReview} from '../../store/review'


export default function Reviews({title, content, sessionUser}){
    let dispatch = useDispatch()
    let currentReview = useSelector(state => state.media.oneReview)
    // let currentMedia = useSelector(state => state.media.oneMedia)
    const {mediaId} = useParams()
    const {reviewId} = useParams()
    // const sessionUser = useSelector((state => state.session.user))


    useEffect(() => {
        dispatch(oneReview(reviewId))
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(removeReview(id))
    }
    return(
        <>
            <div className="review-title">{title}</div>
            <div className="review-content">{content}</div>
            <div className="review-buttons">
            {(sessionUser === Reviews.sessionUser) ?
                <>
                <NavLink to={`/media/${mediaId}/edit-review/${reviewId}`} >
                    <button className="nav-btn">Edit</button>
                </NavLink>

                <button onClick={() => handleDelete(reviewId)} className="nav-btn">Delete</button>
                </> : null}
            </div>
        </>
    )
}
