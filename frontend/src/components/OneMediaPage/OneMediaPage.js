import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'
import { getOne } from  '../../store/media'

export default function OneMediaPage(){
    let dispatch = useDispatch()
    let currentMedia = useSelector(state => state.media)
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getOne(mediaId))
    }, [dispatch])

    return(
        <>
        <div>{currentMedia.title}</div>
            <img className="media-image" src={currentMedia.imageURL[0]} alt="media-img"/>
        </>
    )
}

