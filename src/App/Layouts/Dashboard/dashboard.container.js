import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  isAuthenticated: state.routes.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
