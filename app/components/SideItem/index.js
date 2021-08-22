/**
 *
 * SideItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  ListItemText,
  Divider,
  CardContent,
  List,
  ListItem,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Heading from '../Heading';
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5),
  },
  heading: {
    padding: `${theme.spacing(2)}px ${theme.spacing(6)}px 0`,
  },
  postContainer: {
    margin: theme.spacing(6),
    '@media (max-width: 900px)': {
      margin: theme.spacing(2),
    },
  },
}));
export function SideItem({ itemTitle, items, linkTo, ...rest }) {
  const classes = useStyles();
  return (
    <Card {...rest} className={classes.root}>
      <Heading>{itemTitle}</Heading>
      <Divider />
      <CardContent>
        <List>
          {items.loading && <CircularProgress />}
          {items.error && (
            <Alert severity="error">{items.error.toString()}</Alert>
          )}
          {items &&
            items.data &&
            items.data.map((post, i) => (
              <ListItem divider={i < items.data - 1} key={post.id}>
                <RouterLink to={`/${linkTo}${post.slug}`} className="post-link">
                  <ListItemText primary={post.title} />
                </RouterLink>
              </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  );
}

SideItem.propTypes = {
  itemTitle: PropTypes.string,
  linkTo: PropTypes.string,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
SideItem.defaultProps = {
  itemTitle: '',
  linkTo: '',
  items: false,
};
export default SideItem;
