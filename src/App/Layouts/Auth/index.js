import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import pagesStyle from './style';
import bgImage from '../../Assets/Images/register.jpeg';
import pagesRoutes from '../../Routing/Routes/auth';
import Footer from '../../Components/Footer';
import PagesHeader from '../../Components/Header/PagesHeader';

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <Switch>
              {pagesRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return null;
                }
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                }
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pagesStyle)(Pages);
