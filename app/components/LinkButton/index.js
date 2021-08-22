/**
 *
 * LinkButton
 *
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

function LinkButton({ href, className, children, ...rest }) {
  const CustomRouterLink = forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));
  return (
    <Button
      className={className}
      component={CustomRouterLink}
      to={href}
      {...rest}
    >
      {children}
    </Button>
  );
}

LinkButton.propTypes = {
  href: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any,
};

export default LinkButton;
