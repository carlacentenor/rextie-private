import { connect } from 'react-redux';
import Notification from '../components/Notification';
import { reset ,navigation ,navigateReset } from '../actions/action-index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {

  return {
    isChange: state.isChange,

  }
}

function mapDispatchToProps(dispatch) {
  
    return bindActionCreators({ onReset: reset,
                                navigateTo:navigation,
                                OnNavigateReset : navigateReset
                              }, dispatch)
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(Notification)