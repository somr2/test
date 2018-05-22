import {connect} from 'react-redux'
import DynamicMessage from '../../Components/DynamicMessage'
import {actions} from './action_reducer'

export default connect(
    state => ({
        message: state.dynamicMessage.message
    }),
    dispatch => ({
       
        onChange:      e => dispatch(actions.changeMessage(e))
        
    })
)(DynamicMessage);