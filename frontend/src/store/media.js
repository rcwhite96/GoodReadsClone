const {csrfFetch} = require('./csrf')

const GET_ALL_MEDIA = 'media/getAllMedia'


const getAllMedia = payload => {
    return{
        type: GET_ALL_MEDIA,
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

let initialState = {media:[]}

const mediaReducer = (state = initialState, action) => {
    let newState
        switch(action.type){
            case GET_ALL_MEDIA:
                newState = {...state}
                newState.media = action.payload
                return newState
            default:
                return state;
        }
}

export default mediaReducer
