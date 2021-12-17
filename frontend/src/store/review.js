const {csrfFetch} = require('./csrf')

const GET_REVIEWS = 'review/getAllReviews'
const POST_REVIEW = 'media/postReview'

const getAllReviews = payload => {
    return{
        type: GET_REVIEWS,
        payload
    }
}

const postReview = payload => {
    return {
        type: POST_REVIEW,
        payload
    }
}
export const getReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews')
    if(res.ok){
        const data = await res.json()
        dispatch(getAllReviews(data))
    }
}

export const addReview = (title, content, mediaId) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({title, content, mediaId})
    })
    if(res.ok){
        const review = await res.json()
        dispatch(postReview(review))
        return review
    }
}

let initialState = {media:[]}

const reviewReducer = (state = initialState, action) => {
    let newState
        switch(action.type){
            case GET_REVIEWS:
                newState = {...state}
                newState.review = action.payload
                return newState
            case POST_REVIEW:
                newState = {...state}
                newState.reviews.push(action.payload)
                return newState
            default:
                return state;
        }
}

export default reviewReducer
