import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, useHistory} from 'react-router-dom'
import { putReview, getReviews } from  '../../store/review'

export default function EditReviewForm(){
    const {reviewId} = useParams()
    const sessionUser = useSelector((state => state.session.user))
    const review = useSelector((state => state.review[reviewId]))

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(!review){
            dispatch(getReviews())
        } else {
            setTitle(review.title)
            setContent(review.content)
        }
    }, [dispatch, review, reviewId, title])


    if (!sessionUser) {
        return <Redirect to="/login" />;
      }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrors([])
      const review = await dispatch(putReview(reviewId, title, content)).catch(async (res) => {
          const data = await res.json()
          if (data && data.errors) {
              const filteredErrors = data.errors.filter(
                (error) => error !== 'Invalid value'
              );
              setErrors(filteredErrors);
            }
      })
      if(review) {
          return history.push(`/media`)
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
                        Confirm Edit
                    </button>
            </form>
        </>
    )
}
