import C from '../../Constants'

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
        let product
        
        if(id === '1'){
            product = {id: 1, category: 'necklace', name: 'inifiity necklace', material: 'diamond', price: '1899', description: 'very goooooood'}
        }
        if(id === '2'){
            product = {id: 2, category: 'ring', name: 'inifiity ring', material: 'silver', price: '1855599', description: 'very bad'}
        }
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