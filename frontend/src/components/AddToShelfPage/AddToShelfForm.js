import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ Redirect, useHistory, useParams} from 'react-router-dom'
import { get, add } from  '../../store/shelfMedia'
import { getShelves } from  '../../store/shelf'

export default function AddToShelfForm({shelfId}){
    const sessionUser = useSelector((state => state.session.user))
    const [option, setOption] = useState([])
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const allShelf = useSelector((state => state.shelf.shelves))
    const dispatch = useDispatch();
    const {mediaId}= useParams()
    console.log(shelfId)
    console.log(mediaId)

    useEffect(() => {
        if(option.length){
            dispatch(add(mediaId, shelfId))
        }
    }, [dispatch, option.length])

    //this renders the shelves in the dropdown
    useEffect(() => {
        dispatch(getShelves())
    },[dispatch])

    if (!sessionUser) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        const data = await dispatch(add(mediaId))

        if (data && data.errors) {
            const filteredErrors = data.errors.filter(
                (error) => error !== 'Invalid value'
            );
            setErrors(filteredErrors);
        }
        if(data) {
            return history.push(`/media`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-container">
            <h2>Add Media to Your Shelf</h2>
                <div className="error-div">
                    <p className="form-errors">
                        {errors.map((error, i) => (
                            <span key={i}>{error}</span>
                        ))}
                    </p>
                </div>
                <select className="select" name="option" value={option} onChange={(e) => { setOption(e.target.value)}}>

                {allShelf?.map((shelf) =>
                    <option className="option" value={shelf.id} key={shelf.id}>{shelf?.title}</option>
                    )}
                </select>
                    <button className="nav-btn" type="submit">
                        Add
                    </button>
            </form>
        </>
    )
}
