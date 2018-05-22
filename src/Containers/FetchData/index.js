import {connect} from 'react-redux'
import FetchData from '../../Components/FetchData'
import {actions} from './action_reducer'

export default connect(
    state => ({
        url: state.fetchData.url,
        payloads: state.fetchData.payloads
    }),
    dispatch => ({
       
        fetchData:      url => actions.fetchData(url,dispatch)
        
    })
)(FetchData);