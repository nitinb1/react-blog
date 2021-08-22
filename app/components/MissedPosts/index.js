/**
 *
 * MissedPosts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Divider,
  Grid,
  CardContent,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import AccessTime from '@material-ui/icons/AccessTime';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';
import LinkButton from '../LinkButton';
import Heading from '../Heading';
const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
  img: {
    height: '200px',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  inner: {
    minWidth: 200,
  },
  button: {
    paddingTop: 10,
    color: theme.palette.white,
    flexGrow: 0.1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  postLink: {
    maxHeight: '65px',
    overflowY: 'hidden',
    color: theme.palette.white,
  },
  postHeading: {
    padding: '1rem',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));
export function MissedPosts({ items, itemTitle, ...rest }) {
  const classes = useStyles();
  return (
    <Card {...rest}>
      <Heading>{itemTitle}</Heading>
      <Divider />
      <CardContent className={classes.content}>
        {items && items.loading && <CircularProgress />}
        {items && items.error && (
          <Alert severity="error">{items.error.toString()}</Alert>
        )}
        {items && (
          <Grid container spacing={2}>
            {items.data &&
              items.data.map(post => (
                <Grid item sm={3} xs={12} key={post.id}>
                  <div
                    className={classes.img}
                    style={{
                      backgroundImage: `url(${post.featured_image})`,
                    }}
                  >
                    <div className={classes.postHeading}>
                      <div className="category">
                        <RouterLink to={`/${post.category}`}>
                          {post.category}
                        </RouterLink>
                      </div>
                      <RouterLink to={`/${post.slug}`} className="post-link">
                        <Typography variant="h4" className={classes.postLink}>
                          {post.title}
                        </Typography>
                      </RouterLink>
                      <div className="post-time">
                        <LinkButton
                          className={classes.button}
                          href={post.pubDate}
                        >
                          <AccessTime />
                          {post.pubDate}
                        </LinkButton>
                        <LinkButton
                          className={classes.button}
                          href={`author/${post.author}`}
                        >
                          <AccountCircle />
                          {post.author}
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}

MissedPosts.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  itemTitle: PropTypes.any,
};

export default MissedPosts;
