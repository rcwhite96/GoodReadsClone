import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, Redirect } from 'react-router-dom'
import { getAll } from  '../../store/media'
import './AllMediaPage.css'
import { getShelves } from  '../../store/shelf'

export default function AllProjectsPage(){
    let dispatch = useDispatch()
    let medias = useSelector(state => state.media.media)
    const sessionUser= useSelector(state => state.session.user)

    const imgs = medias?.map((media, index) =>
        <NavLink key={index} to={`/media/${media.id}`}>
            <div className="image-container">
                <img className="media-image" src={media.imageURL} alt="media-img"/>
                <div className="title">{media.title}</div>
            </div>
        </NavLink>
    )

    useEffect(() => {
        dispatch(getShelves())
    },[dispatch])

    useEffect(()=>{
        dispatch(getAll())},
        [dispatch]
    )

    if(!sessionUser){
        return <Redirect to='/'/>
    }

    return (
        <div>
            <div className='header'>Browse Media</div>
            <div className='media-container'>
                {imgs}
            </div>
        </div>
    )
}
