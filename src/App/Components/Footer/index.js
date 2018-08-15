import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';

import footerStyle from './style';

function Footer({ ...props }) {
  const {
    classes, fluid, white,
  } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchor = classes.a
    + cx({
      [` ${classes.whiteColor}`]: white,
    });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="/" className={anchor}>
            {'TreyBro Studios'}
          </a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};

export default withStyles(footerStyle)(Footer);
