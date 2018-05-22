import {connect} from 'react-redux'
import Message from '../../Components/Message'

export default connect(
    state => ({ message: state.staticMessage.message }),
     null
)(Message);