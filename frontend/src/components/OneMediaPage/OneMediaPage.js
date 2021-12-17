import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams } from 'react-router-dom'
import { getOne } from  '../../store/media'

export default function OneMediaPage(){
    let dispatch = useDispatch()
    let currentMedia = useSelector(state => state.media)
    console.log(currentMedia + "AAAAAAAAAAAAAAAAAAAAAAAAA")
    const {mediaId} = useParams()

    useEffect(() => {
        dispatch(getOne(mediaId))
        console.log(getOne(mediaId) + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }, [dispatch])

    return(
        <>
        <div>{currentMedia.title}</div>
        <img className="media-image" src={currentMedia.imageURL} alt="media-img"/>
        <div className="title">{currentMedia?.title}</div>
        <div className="title">{currentMedia?.creator}</div>
        <div className="title">{currentMedia?.mediaType}</div>
        <div className="title">{currentMedia?.description}</div>
        </>
    )
}
