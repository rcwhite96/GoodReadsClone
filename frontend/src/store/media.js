const {csrfFetch} = require('./csrf')

const GET_ALL_MEDIA = 'media/getAllMedia'
const GET_ONE_MEDIA = 'media/getOneMedia'
const ADD_TO_SHELF = 'media/addToShelf'
const SEARCH_MEDIA = 'media/searchMedia'
const ADD_MEDIA = 'media/addMedia'
const EDIT_MEDIA = 'media/editMedia'
const DELETE_MEDIA = 'media/deleteMedia'


const getAllMedia = payload => {
    return{
        type: GET_ALL_MEDIA,
        payload
    }
}

const getOneMedia = payload => {
    return{
        type: GET_ONE_MEDIA,
        payload
    }
}

const addMedia = payload => {
    return {
        type: ADD_MEDIA,
        payload
    }
}

const editMedia = payload => {
    return {
        type: EDIT_MEDIA,
        payload
    }
}

const deleteMedia = payload => {
    return {
        type: DELETE_MEDIA,
        payload
    }
}

const addToShelf = payload => {
    return{
        type: ADD_TO_SHELF,
        payload
    }
}

const searchMedia = payload => {
    return {
        type: SEARCH_MEDIA,
        payload
    }
}

export const getAll = () => async dispatch =>{
    const res = await csrfFetch('/api/media')
    if(res.ok){
        const data = await res.json()
        dispatch(getAllMedia(data))

    }
}

export const getOne = (id) => async dispatch => {
    const res = await csrfFetch(`/api/media/${id}`)
    if(res.ok){
        const data = await res.json()
        dispatch(getOneMedia(data))
        return data
    }
}

export const add = (imageURL, title, creator, mediaType, description) => async dispatch => {
    const res = await csrfFetch(`/api/media/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({imageURL, title, creator, mediaType, description})
    })
    if(res.ok){
        const media = await res.json()
        dispatch(addMedia(media))
        return media
    }
}

export const edit = (id, imageURL, title, creator, mediaType, description) => async dispatch => {
    const res = await csrfFetch(`/api/media/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({imageURL, title, creator, mediaType, description})
    })
    if(res.ok){
        const media = await res.json()
        dispatch(editMedia(media))
        return media
    }
}

export const remove = (id) => async dispatch => {
    const res = await csrfFetch(`/api/media/${id}`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(deleteMedia(id))
    }
}

export const mediaToShelf = (id) => async dispatch => {
    const res = await csrfFetch(`/api/media/${id}`)
    if(res.ok){
        const data = await res.json()
        dispatch(addToShelf(data))
        return data
    }
}

export const mediaSearch = (searchTerm) => async dispatch => {
    const res = await fetch(`/api/search/${searchTerm}`)
    if(res.ok){
        const data = await res.json()
        dispatch(searchMedia(data))
        console.log(data)
        return data
    }
}

let initialState = {media:[]}

const mediaReducer = (state = initialState, action) => {
    let newState
        switch(action.type){
            case GET_ALL_MEDIA:
                newState = {...state}
                newState.media = action.payload
                return newState
            case GET_ONE_MEDIA:
                newState = {...state}
                newState.oneMedia = action.payload
                return newState
            case ADD_MEDIA:
                newState = {...state}
                newState.media.push(action.payload)
                return newState
            case EDIT_MEDIA:
                newState = {...state}
                const index = newState.media.findIndex(med => med.id === action.payload.id)
                newState.media[index] = action.payload
                newState.currentMedia = action.payload
                return newState
            case DELETE_MEDIA:
                newState={...state}
                delete newState.media[action.payload]
                return newState
            // case ADD_TO_SHELF:
            //     newState = {...state}
            //     return newState.concat(action.payload)
            case SEARCH_MEDIA:
                newState = {...state}
                newState = action.payload
                return newState
            default:
                return state;
        }
}

export default mediaReducer
