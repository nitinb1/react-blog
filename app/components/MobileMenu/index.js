/**
 *
 * MobileMenu
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  ListItem,
  Typography,
  List,
  Divider,
  colors,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchInput from '../SearchInput';
import LinkButton from '../LinkButton';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  logoMobile: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    alignItems: 'center',
  },
  logo: {
    color: '#ffff',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  button: {
    color: colors.blueGrey[800],
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    '&:hover': {
      background: colors.blueGrey[100],
    },
  },
  active: {
    backgroundColor: colors.blueGrey[100],
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
  menuList: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

export function MobileMenu({ logo, categories, ...rest }) {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const getDrawerChoices = () =>
    categories.map(({ label, href }) => (
      <ListItem disableGutters key={label}>
        <LinkButton
          activeClassName={classes.active}
          className={classes.button}
          href={href}
        >
          {label}
        </LinkButton>
      </ListItem>
    ));

  return (
    <Toolbar {...rest}>
      <IconButton
        {...{
          edge: 'start',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer}>
        <Drawer
          className={classes.drawerPaper}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.logoMobile}>
            <Typography variant="h2" component="h1">
              {logo}
            </Typography>
          </div>
          <Divider />

          <SearchInput />
          <List className={classes.menuList}>{getDrawerChoices()}</List>
        </Drawer>
      </nav>
      <Typography variant="h2" component="h2" className={classes.logo}>
        {logo}
      </Typography>
    </Toolbar>
  );
}

MobileMenu.propTypes = {
  logo: PropTypes.any,
  categories: PropTypes.array,
};

export default MobileMenu;
