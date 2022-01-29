import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, useHistory} from 'react-router-dom'
import { edit, getAll } from  '../../store/media'


export default function EditMediaForm(){

    const {mediaId} = useParams()

    const sessionUser = useSelector((state => state.session.user))
    // const review = useSelector((state => state.review.reviews[reviewId - 1]))
    const media = useSelector((state => state.media.oneMedia))
    // const [title, setTitle] = useState(review?.title);
    // const [content, setContent] = useState(review?.content)

    const [imageURL, setImageURL] = useState(media?.imageURL)
    const [title, setTitle] = useState(media?.title)
    const [creator, setCreator] = useState(media?.creator)
    const [mediaType, setMediaType] = useState(media?.mediaType)
    const [description, setDescription] = useState(media?.description)
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(!media){
            dispatch(getAll())
        } else {

        }
    }, [dispatch, media, mediaId, imageURL, title, creator, mediaType, description])


    if (!sessionUser) {
        return <Redirect to="/login" />;
      }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrors([])
      const review = await dispatch(edit(mediaId, imageURL, title, creator, mediaType, description)).catch(async (res) => {
          const data = await res.json()
          if (data && data.errors) {
              const filteredErrors = data.errors.filter(
                (error) => error !== 'Invalid value'
              );
              setErrors(filteredErrors);
            }
      })
      if(review) {
          return history.push(`/media/${mediaId}`)
      }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='signup-container'>
                <h2>Edit Review</h2>
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
                        Confirm Edit
                    </button>
            </form>
        </>
    )
}
