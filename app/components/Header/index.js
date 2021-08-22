/**
 *
 * Header
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, makeStyles, CssBaseline } from '@material-ui/core';
import MobileMenu from '../MobileMenu';
import DesktopMenu from '../DesktopMenu';

const drawerWidth = 240;

const categories = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Entertainment',
    href: '/category/entertainment',
  },
  {
    label: 'Sports',
    href: '/category/sports',
  },
  {
    label: 'Tech',
    href: '/category/tech',
  },
  {
    label: 'World',
    href: '/category/world',
  },
  {
    label: 'Education',
    href: '/category/education',
  },
  {
    label: 'Business',
    href: '/category/business',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    position: 'absolute',
    paddingLeft: '118px',
    marginLeft: drawerWidth,
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100%',
    width: '100%',
  },
}));

function Header({ children }) {
  const classes = useStyles();

  const [mobileView, setMobileView] = useState(false);
  const logo = 'React Blog';
  useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const menuProps = {
    logo,
    categories,
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        {mobileView ? (
          <MobileMenu {...menuProps} />
        ) : (
          <DesktopMenu {...menuProps} />
        )}
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
