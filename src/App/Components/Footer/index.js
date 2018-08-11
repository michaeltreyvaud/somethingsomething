import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import footerStyle from './style';

function Footer({ ...props }) {
  const {
    classes, fluid, white, rtlActive,
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
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={block}>
                {rtlActive ? 'الصفحة الرئيسية' : 'Home'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={block}>
                {rtlActive ? 'شركة' : 'Company'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={block}>
                {rtlActive ? 'بعدسة' : 'Portfolio'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={block}>
                {rtlActive ? 'مدونة' : 'Blog'}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="#" className={anchor}>
            {rtlActive ? 'توقيت الإبداعية' : 'Something Something'}
          </a>
          {rtlActive
            ? ', مصنوعة مع الحب لشبكة الإنترنت أفضل'
            : ', made with love for a better web'}
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