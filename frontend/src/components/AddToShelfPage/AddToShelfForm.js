import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ Redirect, useHistory, useParams} from 'react-router-dom'
import { get, add } from  '../../store/shelfMedia'
import { getShelves } from  '../../store/shelf'

export default function AddToShelfForm(){
    const sessionUser = useSelector((state => state.session.user))
    const history = useHistory()
    const allShelf = useSelector((state => state.shelf.shelves))
    const [option, setOption] = useState([])
    const [selected, setSelected] = useState(0)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();
    const {mediaId}= useParams()
    // console.log(allShelf[0])
    console.log(mediaId)

    useEffect(() => {setSelected(selected)}, [selected])

    console.log(selected) //undefined

    useEffect(() => {
        // if(option.length){
            dispatch(add(mediaId, selected))
            // console.log(option.id)
            // console.log('---------------')
            // console.log(shelfId)
            // console.log(mediaId)
        // }
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

        console.log(selected)
        console.log(mediaId)
        let data
        if(selected !== null){
            data = await dispatch(add(mediaId, selected))
        }else{
            console.log(errors)
        }

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
                <select className="select" name="option" value={selected} onChange={(e) => { setSelected(e.target.value)}}>
                {/* onChange={(e) => { setSelected(e.target.value)} */}
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
