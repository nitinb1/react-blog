/**
 *
 * DesktopMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, makeStyles, Typography } from '@material-ui/core';
import SearchInput from '../SearchInput';
import LinkButton from '../LinkButton';
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    color: '#ffff',
  },
  activeButton: {
    backgroundColor: '#303f9f',
    color: '#fafafa',
    fontWeight: 600,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
  toolbar: theme.mixins.toolbar,
}));
function DesktopMenu({ categories, logo, ...rest }) {
  const classes = useStyles();

  const getMenuButtons = () =>
    categories.map(({ label, href }) => (
      <LinkButton
        activeClassName={classes.activeButton}
        style={{ flexGrow: 1, fontWeight: 600 }}
        {...{
          key: label,
          color: 'inherit',
          to: href,
        }}
      >
        {label}
      </LinkButton>
    ));

  return (
    <Toolbar className={classes.toolbar} {...rest}>
      <Typography variant="h2" component="h2" className={classes.logo}>
        {logo}
      </Typography>
      <div className={classes.grow} />
      <div>{getMenuButtons()}</div>
      <div className={classes.grow} />
      <SearchInput />
    </Toolbar>
  );
}

DesktopMenu.propTypes = {
  logo: PropTypes.any,
  categories: PropTypes.array,
};

export default DesktopMenu;
