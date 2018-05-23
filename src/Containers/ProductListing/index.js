import {connect} from 'react-redux'
import ProductListing from '../../Components/ProductListing'
import {actions} from './action_reducer'
import { withRouter } from 'react-router-dom'
// export default withRouter(connect(mapStateToProps)(Something

export default withRouter(connect(
    state => ({
        products: state.productListing.products,
        redirect: state.productListing.redirect,
        whereTo: state.productListing.whereTo
    }), 
    dispatch => ({
        onClick: id => actions.redirect(dispatch, id),
        onRedirect: () => actions.resetRedirect(dispatch)
    })
    
)(ProductListing))