const {csrfFetch} = require('./csrf')

const GET_ALL_MEDIA = 'media/getAllMedia'
const GET_ONE_MEDIA = 'media/getOneMedia'


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
                newState.media = action.payload
                console.log(newState.media)
                return newState
            default:
                return state;
        }
}

export default mediaReducer
