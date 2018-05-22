import {connect} from 'react-redux'
import ToDo from '../../Components/ToDo'
import {actions} from './action_reducer'

export default connect(
    state => {console.log(state.toDo)
        return {
        input: state.toDo.input,
        tasks: state.toDo.tasks
    }},
    dispatch => ({
       
        onChange:      e => dispatch(actions.updateInput(e)),
        onClick:       i => dispatch(actions.removeItem(i)),
        onKeyPress:    e => dispatch(actions.addItem(e))
        
    })
)(ToDo);