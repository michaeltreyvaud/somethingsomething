import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';

import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/CustomButtons';
import Card from '../../Components/Card/Card';
import CardBody from '../../Components/Card/CardBody';
import CardHeader from '../../Components/Card/CardHeader';
import CardFooter from '../../Components/Card/CardFooter';
import Snackbar from '../../Components/Snackbar/Snackbar';

import style from './style';

class ForgotPasswordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
      email: '',
      displayError: false,
      displaySuccess: false,
    };
  }

  componentDidMount() {
    const fadeIn = setTimeout(() => {
      clearTimeout(fadeIn);
      this.setState({ cardAnimaton: '' });
    }, 300);
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    this.setState({
      displayError: nextProps.error,
      displaySuccess: nextProps.success,
    });
    if (nextProps.success === true) {
      const successTimeout = setTimeout(() => {
        clearTimeout(successTimeout);
        history.push('/auth/login');
      }, 2000);
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  forgotPassword() {
    const { forgotPassword } = this.props;
    const { email } = this.state;
    forgotPassword(email);
  }

  render() {
    const {
      classes, loading, errorMessage, history,
    } = this.props;
    const {
      cardAnimaton, email, displayError, displaySuccess,
    } = this.state;
    if (loading) return (<h1>TODO: Loading</h1>);
    return (
      <div className={classes.container}>
        <Snackbar
          place="bc"
          color="danger"
          message={errorMessage}
          open={displayError}
          closeNotification={() => this.setState({ displayError: false })}
          close
        />
        <Snackbar
          place="bc"
          color="success"
          message="Password reset, successfully. Please check your email for further instructions"
          open={displaySuccess}
        />
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>Forgotten Password</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                    value={email}
                    onChange={event => this.onChange(event)}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter} style={{ flexDirection: 'column' }}>
                  <Button
                    color="rose"
                    simple
                    size="lg"
                    block
                    onClick={() => this.forgotPassword()}
                  >
                    Retrieve Password
                  </Button>
                  <Button
                    color="info"
                    simple
                    size="sm"
                    block
                    onClick={() => history.push('/auth/login')}
                  >
                    Back to Login
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ForgotPasswordView.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  forgotPassword: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default withStyles(style)(ForgotPasswordView);
