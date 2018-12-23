import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import style from './style';

function RegularButton({ ...props }) {
  const {
    loading,
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  const loadingColor = style[color].backgroundColor || style[color].color;
  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {(loading) ? <ReactLoading type="spin" style={{ color: loadingColor }} /> : children}
    </Button>
  );
}

RegularButton.propTypes = {
  loading: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'twitter',
    'facebook',
    'google',
    'linkedin',
    'pinterest',
    'youtube',
    'tumblr',
    'github',
    'behance',
    'dribbble',
    'reddit',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
};

RegularButton.defaultProps = {
  loading: false,
};

export default withStyles(style)(RegularButton);
