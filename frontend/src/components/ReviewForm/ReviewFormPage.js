import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { addReview } from '../../store/review';

import './ReviewFormPage.css'

const CreateReview = () => {
    const sessionUser = useSelector((state => state.session.user))
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()
    const [errors, setErrors] = useState([])

    if (!sessionUser) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrors([])
        const review = await dispatch(addReview(title, content)).catch(async(res) => {
            const data = await res.json()
            if (data && data.errors) {
                const filteredErrors = data.errors.filter(
                    (error) => error !== 'Invalid value'
                )
                setErrors(filteredErrors)
            }
        })
        if(review) {
            return history.pushState(`/media`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-container">
            <h2>Post a Review</h2>
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
                    <textarea
                    className="content-input"
                    placeholder="content"
                    onChange ={(e) => setContent(e.target.value)}
                    value={content}
                    />
                    <button className="nav-btn" type="submit">
                        Add Review
                    </button>
            </form>
        </>
    )
}

export default CreateReview
