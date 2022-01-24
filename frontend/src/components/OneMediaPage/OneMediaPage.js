import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams} from 'react-router-dom'
import { getOne } from  '../../store/media'
import Reviews from '../Reviews/Reviews'
import './OneMediaPage.css'

export default function OneMediaPage(){
    let dispatch = useDispatch()
    let currentMedia = useSelector(state => state.media.oneMedia)
    const {mediaId} = useParams()
    const sessionUser = useSelector((state => state.session.user))

    useEffect(() => {
        dispatch(getOne(mediaId))
    }, [dispatch])

    const reviews = currentMedia?.Reviews.map((rev, index) =>
        <div key={index} className="review-div">
            {
                <Reviews title={rev.title}
                     content={rev.content}
                     sessionUser={sessionUser}
                     revSessionUser={rev.userId}
                     reviewId={rev.id}
                />
            }
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
                    <div className="shelf-btn">
                        <NavLink to={`/media/${mediaId}/add-to-shelf`}>
                            <button className="nav-btn">Add to Shelf</button>
                        </NavLink>
                    </div>
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
