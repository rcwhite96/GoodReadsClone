import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { add } from '../../store/media';

const CreateMedia = () => {
    const sessionUser = useSelector((state => state.session.user))
    const dispatch = useDispatch();
    const [imageURL, setImageURL] = useState('')
    const [title, setTitle] = useState('')
    const [creator, setCreator] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()
    const [errors, setErrors] = useState([])


    if (!sessionUser) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrors([])
        const review = await dispatch(add(imageURL, title, creator, mediaType, description)).catch(async(res) => {
            const data = await res.json()
            if (data && data.errors) {
                const filteredErrors = data.errors.filter(
                    (error) => error !== 'Invalid value'
                )
                setErrors(filteredErrors)
            }
        })
        if(review) {
            return history.push(`/media`)
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
                        placeholder="Image URL"
                        onChange ={(e) => setImageURL(e.target.value)}
                        value={imageURL}
                    />
                    <input
                        className="title-input"
                        placeholder="Title"
                        onChange ={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <input
                        className="title-input"
                        placeholder="Creator"
                        onChange ={(e) => setCreator(e.target.value)}
                        value={creator}
                    />
                    <input
                        className="title-input"
                        placeholder="Media Type"
                        onChange ={(e) => setMediaType(e.target.value)}
                        value={mediaType}
                    />
                    <textarea
                        className="title-input"
                        placeholder="Description"
                        onChange ={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <button className="nav-btn" type="submit">
                        Add Media
                    </button>
            </form>
        </>
    )
}

export default CreateMedia
