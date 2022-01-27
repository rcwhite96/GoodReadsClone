import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ Redirect, useHistory} from 'react-router-dom'
import { getShelves } from  '../../store/shelf'

export default function AddToShelfForm(){
    const sessionUser = useSelector((state => state.session.user))
    const [option, setOption] = useState([])
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const allShelf = useSelector((state => state.shelf.shelves))
    const dispatch = useDispatch();
    console.log(allShelf)

    useEffect(() => {
        if(option.length){
            dispatch(getShelves())
        }
    }, [dispatch, option.length])

    if (!sessionUser) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
        const shelf = await dispatch(getShelves()).catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) {
                const filteredErrors = data.errors.filter(
                  (error) => error !== 'Invalid value'
                );
                setErrors(filteredErrors);
              }
        })
        if(shelf) {
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
                <select className="select" name="option" onChange={(e) => setOption(e.target.value)}>
                {allShelf?.map((shelf) =>
                    <option className="option" value={option} key={shelf.id}>{shelf?.title}</option>
                    )}
                </select>
                    <button className="nav-btn" type="submit">
                        Add
                    </button>
            </form>
        </>
    )
}
