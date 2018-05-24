import C from '../../Constants'
import data from '../../TempAPI'

const init = {
    id: '', 
    category: '', 
    name: '', 
    material: '', 
    price: '', 
    description: ''
}

export const actions = {
    fetchData:(dispatch,id) => {
        let product = data[id-1]
        return dispatch({type: C.FETCH_DATA, product: {...product}})
    },
    clearData: dispatch => {
        return dispatch({type: C.CLEAR_DATA})
    }
}

export const product = (state=init, action) => {
    switch (action.type){
        case C.FETCH_DATA:
            return {
                ...action.product
            }
        case C.CLEAR_DATA:
            return {
                ...init
            }
        default:
            return state
    }
}