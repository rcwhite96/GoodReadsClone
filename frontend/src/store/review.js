const {csrfFetch} = require('./csrf')

const GET_ALL_REVIEWS = 'review/getAllReviews'
const GET_ONE_REVIEW = 'media/getOneReview'

const getAllReviews = payload => {
    return{
        type: GET_ALL_REVIEWS,
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

let initialState = {media:[]}

const reviewReducer = (state = initialState, action) => {
    let newState
        switch(action.type){
            case GET_ALL_REVIEWS:
                newState = {...state}
                newState.review = action.payload
                return newState
            default:
                return state;
        }
}

export default reviewReducer
