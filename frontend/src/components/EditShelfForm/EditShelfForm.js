import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, useHistory} from 'react-router-dom'
import { putShelf, getShelves } from  '../../store/shelf'


export default function EditShelfForm(){
    const {shelfId} = useParams()

    const sessionUser = useSelector((state => state.session.user))
    const shelf = useSelector((state => state.shelf.oneShelf))
    

    const [title, setTitle] = useState(shelf.title);
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(!shelf){
            dispatch(getShelves())
        } else {

        }
    }, [dispatch, shelfId, title, shelf])


    if (!sessionUser) {
        return <Redirect to="/login" />;
      }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrors([])
      const shelf = await dispatch(putShelf(shelfId, title)).catch(async (res) => {
          const data = await res.json()
          if (data && data.errors) {
              const filteredErrors = data.errors.filter(
                (error) => error !== 'Invalid value'
              );
              setErrors(filteredErrors);
            }
      })
      if(shelf) {
          return history.push(`/shelves/${shelfId}`)
      }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='signup-container'>
                <h2>Edit Shelf</h2>
                    <div className="error-div">
                        <p className="form-errors">
                            {errors.map((error, i) => (
                                <span key={i}>{error}</span>
                            ))}
                        </p>
                    </div>
                    <input
                    className="title-input"
                    placeholder="title"
                    onChange ={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                    <button className="nav-btn" type="submit">
                        Confirm Edit
                    </button>
            </form>
        </>
    )
}
