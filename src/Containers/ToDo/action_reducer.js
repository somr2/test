import C from '../../Constants'

const init = {
    tasks: [],
    input: ''
}

// action
export const actions = {
    
    removeItem:     i => ({type: C.REMOVE_TODO_ITEM, item: i}),
    updateInput:    e => ({type: C.UPDATE_INPUT, input: e.currentTarget.value}),
    addItem:        e => (
                            e.key === 'Enter'? 
                            {type: C.ADD_TODO_ITEM, input: e.currentTarget.value}:
                            {type: C.DEFAULT}
                         )
}

// reducer
export const toDo = (state=init,action) => {
    switch (action.type) {

        case C.REMOVE_TODO_ITEM:
            return {
                tasks: state.tasks.filter((task,i) => i !== action.item),
                input: state.input
            }

        case C.ADD_TODO_ITEM:
            return {
                tasks: [
                    ...state.tasks,
                    action.input
                ],
                input: ''
            }

        case C.UPDATE_INPUT:
            return {
                ...state,
                input: action.input
            }
            
        default:
            return state
    }
}