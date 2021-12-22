import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams} from 'react-router-dom'
import { getReviews } from  '../../store/review'

export default function Reviews(){
    let dispatch = useDispatch()
    let reviews = useSelector(state => state.reviews)

    const allReviews = reviews.map((review, index) =>
        <>
            <div>{review.title}</div>
        </>
    )

    useEffect(()=>{
        dispatch(getReviews())},
        [dispatch]
    )

    return (
        <div>
            <div>Reviews</div>
            <div>{allReviews}</div>
        </div>
    )

}
