import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, useHistory} from 'react-router-dom'
import { putReview, getReviews } from  '../../store/review'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function EditReviewForm(){
    const {reviewId} = useParams()

    const {mediaId} = useParams()

    const sessionUser = useSelector((state => state.session.user))
    const review = useSelector((state => state.review.reviews[reviewId - 1]))

    const [title, setTitle] = useState(review?.title);
    const [content, setContent] = useState(review?.content)
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(!review){
            dispatch(getReviews())
        } else {

        }
    }, [dispatch, review, reviewId, title, content])


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
                    placeholder="title"
                    onChange ={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                    <div className="editor">
                        <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onChange={(e, editor) => {
                            const data = editor.getData()
                            setContent(data)
                        }}/>
                    </div>
                    <button className="nav-btn" type="submit">
                        Confirm Edit
                    </button>
            </form>
        </>
    )
}
