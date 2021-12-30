import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink, useParams} from 'react-router-dom'
import {mediaSearch, getAll } from  '../../store/media'
import '../AllMediaPage/AllMediaPage'

export default function SearchPage(){
    const {term} = useParams()
    let dispatch = useDispatch()
    let media = useSelector(state => state.media)

    let medias
    if(media){
        medias = Object.values(media)
    }


    const imgs = medias?.map((media, index) =>
        <NavLink key={index} to={`/media/${media.id}`}>
            <div className="image-container">
                <img className="media-image" src={media.imageURL} alt="media-img"/>
                <div className="title">{media.title}</div>
            </div>
        </NavLink>
    )

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return (
        <div>
            <div className='header'>Search Results</div>
            <div className='media-container'>
                {imgs}
            </div>
        </div>
    )
}
