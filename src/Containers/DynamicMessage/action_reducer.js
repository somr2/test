import C from '../../Constants'

const init = {
    message: ''
}

export const actions = {
    changeMessage: e => ({type: C.INPUT_MESSAGE, input:e.currentTarget.value})
}

export const dynamicMessage = (state=init, action) => {
    switch (action.type){
        case C.INPUT_MESSAGE:
            return {
                message: action.input
            }
        default:
            return state
    }
}

