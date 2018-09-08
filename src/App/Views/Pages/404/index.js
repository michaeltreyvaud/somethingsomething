import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Button from '../../../Components/CustomButtons';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardFooter from '../../../Components/Card/CardFooter';

import style from './style';

class FourOhFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
    };
  }

  componentDidMount() {
    this.timeOutFunction = setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 300);
  }

  render() {
    const {
      classes, loading, history,
    } = this.props;
    const {
      cardAnimaton
    } = this.state;
    if (loading) return (<h1>TODO: Loading</h1>);
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>404</h4>
                </CardHeader>
                <CardBody className={classes.textCenter}>
                <h2>Page not found</h2>
                </CardBody>
                <CardFooter className={classes.justifyContentCenter} style={{ flexDirection: 'column' }}>
                  <Button
                    color="info"
                    simple
                    size="sm"
                    block
                    onClick={() => history.goBack()}
                  >
                    Go Back
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

export default withStyles(style)(FourOhFour);