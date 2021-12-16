import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import { getAll } from  '../../store/media'


export default function AllProjectsPage(){
    let dispatch = useDispatch()
    let medias = useSelector(state => state.media.media)
    // console.log(medias)
    const cards = medias?.map((media, index) =>
        <NavLink key={index} to={`/media/${media.id}`}>
            <div className="image-container">
                <img className="media-image" src={media.imageURL[0]} alt="media-img"/>
            </div>
            {/* <div>{media.title}</div> */}
        </NavLink>
    )

    useEffect(()=>{
        dispatch(getAll())},
        [dispatch]
    )

    return (
        <div>
            <div className='header'>Browse Media</div>
            <div className='media-wrapper'>
                {cards}
            </div>
        </div>
    )
}
