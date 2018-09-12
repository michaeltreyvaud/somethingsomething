import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';

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

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
      email: '',
      password: '',
      newPassword: '',
      displayError: false,
      displaySuccess: false,
    };
  }

  componentDidMount() {
    this.timeOutFunction = setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 300);
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.success === true && nextProps.session.length === 0) {
      this.setState({
        displaySuccess: nextProps.success,
      });
      const successTimeout = setTimeout(() => {
        clearTimeout(successTimeout);
        history.push('/dashboard/home');
      }, 3000);
    }
    this.setState({
      displayError: nextProps.error,
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  login() {
    const { login, loading } = this.props;
    const { email, password } = this.state;
    if (loading) return false;
    return login(email, password);
  }

  challenge() {
    const { challenge, session } = this.props;
    const { email, newPassword } = this.state;
    challenge(email, newPassword, session);
  }

  render() {
    const {
      classes, loading, errorMessage, challengeType,
      history,
    } = this.props;
    const {
      cardAnimaton, email, password, displayError,
      newPassword, displaySuccess,
    } = this.state;
    return (
      <div className={classes.container}>
        {/** TODO: Move these components up and link with actions / reducers * */}
        <Snackbar
          place="bc"
          color="danger"
          message={errorMessage}
          open={displayError}
          closeNotification={() => this.setState({ displayError: false })}
          close
        />
        {/** TODO: Move these components up and link with actions / reducers * */}
        <Snackbar
          place="bc"
          color="success"
          message="Successfull logged in, please wait..."
          open={displaySuccess}
          closeNotification={() => {}}
        />
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>{challengeType === 'NEW_PASSWORD_REQUIRED' ? 'Update Password' : 'Login'}</h4>
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
                  {challengeType === '' && (
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            <Lock className={classes.inputAdornmentIcon} />
                          </Icon>
                        </InputAdornment>
                      ),
                    }}
                    type="password"
                    value={password}
                    onChange={event => this.onChange(event)}
                  />
                  )}
                  {challengeType === 'NEW_PASSWORD_REQUIRED' && (
                  <CustomInput
                    labelText="New Password"
                    id="newPassword"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            <Lock className={classes.inputAdornmentIcon} />
                          </Icon>
                        </InputAdornment>
                      ),
                    }}
                    type="password"
                    value={newPassword}
                    onChange={event => this.onChange(event)}
                  />
                  )}
                </CardBody>
                <CardFooter className={classes.justifyContentCenter} style={{ flexDirection: 'column' }}>
                  <Button
                    loading={loading}
                    color="rose"
                    simple
                    size="lg"
                    block
                    onClick={(challengeType === 'NEW_PASSWORD_REQUIRED') ? () => this.challenge() : () => this.login()}
                  >
                    {challengeType === 'NEW_PASSWORD_REQUIRED' ? 'Submit' : 'Login'}
                  </Button>
                  <Button
                    loading={false}
                    color="info"
                    simple
                    size="sm"
                    block
                    onClick={() => history.push('/auth/forgot')}
                  >
                    Forgot Password
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

LoginView.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  challengeType: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  challenge: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default withStyles(style)(LoginView);
