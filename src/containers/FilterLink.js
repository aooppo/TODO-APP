import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisableFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
        active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisableFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)