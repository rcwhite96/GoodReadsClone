import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useParams, Redirect} from 'react-router-dom'
import { putReview } from  '../../store/review'

export default function EditReviewForm(){
    const {reviewId} = useParams()
    const sessionUser = useSelector((state => state.session.user))
    const review = useSelector((state => state.review[reviewId]))

    const [title, setTitle] = useState('');
    const [content, setConent] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(!review){
            dispatch(getNotes())
        } else {
            setTitle(notes.title)
            setContent(review.content)
        }
    }, [dispatch, review, reviewId])


    if (!sessionUser) {
        return <Redirect to="/login" />;
      }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrors([])
      const review = await dispatch(editNote(reviewId, title, content)).catch(async (res) => {
          const data = await res.json()
          if (data && data.errors) {
              const filteredErrors = data.errors.filter(
                (error) => error !== 'Invalid value'
              );
              setErrors(filteredErrors);
            }
      })
      if(review) {
          return history.push(`/review/${id}`)
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