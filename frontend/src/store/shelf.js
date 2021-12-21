const {csrfFetch} = require('./csrf')

const GET_SHELVES = 'review/getAllShelves'
const GET_ONE_SHELF = 'review/getOneShelf'
const POST_SHELF = 'review/postShelf'
const EDIT_SHELF= 'review/editShelf'
const DELETE_SHELF = 'review/deleteShelf'

const getAllShelves = payload => {
    return {
        type: GET_SHELVES,
        payload
    }
}

const getOneShelf = payload => {
    return {
        type: GET_ONE_SHELF,
        payload
    }
}

const postShelf = payload => {
    return {
        type: POST_SHELF,
        payload
    }
}

const editShelf = payload => {
    return {
        type: EDIT_SHELF,
        payload
    }
}

const deleteShelf = payload => {
    return {
        type: DELETE_SHELF,
        payload
    }
}

export const getShelves = () => async dispatch => {
    const res = await csrfFetch('/api/shelves')
    if(res.ok){
        const data = await res.json()
        dispatch(getAllShelves(data))
    }
}

export const getOne = (id) => async dispatch => {
    const res = await csrfFetch(`/api/shelves/${id}`)
    if(res.ok){
        const data = await res.json()
        dispatch(getOneShelf(data))
        return data
    }
}

export const addShelf = (title, mediaId) => async dispatch => {
    const res = await csrfFetch('/api/shelves', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({title, mediaId})
    })
    if(res.ok){
        const shelf = await res.json()
        dispatch(postShelf(shelf))
        return shelf
    }
}

export const putShelf = (id, title, mediaId) => async dispatch => {
    const res = await csrfFetch(`/api/shelves/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, mediaId})
    })
    if(res.ok){
        const shelf = await res.json()
        dispatch(editShelf(shelf))
        return shelf
    }
}

export const removeShelf = (id) => async dispatch => {
    const res = await csrfFetch(`/api/shelves/${id}`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(deleteShelf(id))
    }
}

let initialState = {shelves:[]}

const shelfReducer = (state = initialState, action) => {
    let newState
        switch(action.type){
            case GET_SHELVES:
                newState = {...state}
                newState.shelves = action.payload.shelve
                return newState
            case GET_ONE_SHELF:
                newState = {...state}
                newState.oneShelf = action.payload
                return newState
            case POST_SHELF:
                newState = {...state}
                newState.shelves.push(action.payload)
                return newState
            case EDIT_SHELF:
                newState = {...state}
                const index = newState.shelves.findIndex(shelf => shelf.id === action.payload.id)
                newState.shelves[index] = action.payload
                newState.currentShelf = action.payload
                return newState
            case DELETE_SHELF:
                newState = {...state}
                const indexRem = newState.shelves.findIndex(shelf => shelf.id === action.payload.id)
                newState.shelves.splice(indexRem, 1)
                return newState
            default:
                return state;
        }
}

export default shelfReducer
