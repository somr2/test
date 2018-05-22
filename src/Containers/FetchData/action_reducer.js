import C from '../../Constants'

// action
export const actions = {
    fetchData:          (url, dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then(payloads => dispatch({
            type: C.FETCH_DATA,
            payloads: payloads
        }))
    }
}
const init = {
    url: '',
    payloads: []
}

//reducer
export const fetchData = (state=init, action) => {
    switch (action.type){
        case C.FETCH_DATA:
            return {
                ...state,
                payloads: action.payloads
            }
        default:
            return state
    }
}