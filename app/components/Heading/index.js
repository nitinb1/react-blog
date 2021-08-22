/**
 *
 * Heading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.white,
    width: 'auto',
    height: '40px',
    display: 'inline-block',
    position: 'relative',
    padding: '5px',
    background: theme.palette.primary.main,
  },
  span: {
    width: 0,
    position: 'absolute',
    right: '-30px',
    top: '0px',
    height: 0,
    borderStyle: 'solid',
    borderWidth: '40px 0 0px 30px',
    borderLeftColor: theme.palette.primary.main,
    borderColor: `transparent transparent transparent ${
      theme.palette.primary.main
    }`,
  },
}));
function Heading({ children }) {
  const classes = useStyles();
  return (
    <Typography variant="h4" component="h2" className={classes.heading}>
      {children}
      <span className={classes.span} />
    </Typography>
  );
}

Heading.propTypes = {
  children: PropTypes.any,
};

export default Heading;
