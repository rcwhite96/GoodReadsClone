import { csrfFetch } from "./csrf"

const GET_SHELF_MEDIA = 'media/getShelfMedia'
const ADD_SHELF_MEDIA = 'media/addToShelf'

const getShelfMedia = payload => {
    return {
        type: GET_SHELF_MEDIA,
        payload
    }
}

const addToShelf = payload => {
    return {
        type: ADD_SHELF_MEDIA,
        payload
    }
}

export const get = () => async dispatch => {
    const res = await csrfFetch('/api/add-to-shelf')
    const shelfMedia = await res.json()
    dispatch(getShelfMedia(shelfMedia))
    return shelfMedia
}

export const add = ({mediaId, shelfId}) => async dispatch => {
    const res = await csrfFetch('/api/add-to-shelf', {
        method: 'POST',
        body: JSON.stringify({mediaId, shelfId})
    })
    const shelfMedia = await res.json()
    dispatch(addToShelf(shelfMedia))
    return shelfMedia

}

let initialState = {shelfMedia:[]}

const shelfMediaReducer = (state = initialState, action) => {
    let newState
        switch(action.type){
            case GET_SHELF_MEDIA:
                newState = {...state}
                newState.shelfMedia = action.payload
                return newState
            case ADD_SHELF_MEDIA:
                newState = {...state}
                newState.shelfMedia.push(action.payload)
                return newState
            default:
                return state
        }
}

export default shelfMediaReducer
