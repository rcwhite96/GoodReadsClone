import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { addShelf } from '../../store/shelf';



const CreateShelf = () => {
    const sessionUser = useSelector((state => state.session.user))
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const history = useHistory()
    const [errors, setErrors] = useState([])

    if (!sessionUser) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrors([])
        const shelf = await dispatch(addShelf(title)).catch(async(res) => {
            const data = await res.json()
            if (data && data.errors) {
                const filteredErrors = data.errors.filter(
                    (error) => error !== 'Invalid value'
                )
                setErrors(filteredErrors)
            }
        })
        if(shelf) {
            return history.push(`/shelves`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-container">
            <h2>Add a Shelf</h2>
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
                        Add Shelf
                    </button>
            </form>
        </>
    )
}

export default CreateShelf
