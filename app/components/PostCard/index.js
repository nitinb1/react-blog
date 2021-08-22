/**
 *
 * PostCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Grid, CardContent } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';

import AccessTime from '@material-ui/icons/AccessTime';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LinkButton from '../LinkButton';
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  content: {
    padding: `${theme.spacing(1)}px !important`,
  },
  img: {
    height: '300px',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  inner: {
    minWidth: 300,
  },
  button: {
    padding: 0,
    color: 'gray',
    flexGrow: 0.1,
  },
  postHeading: {
    padding: '1rem',
  },
}));

function PostCard({ posts, ...rest }) {
  const classes = useStyles();
  const htmlDecode = (input, count) => {
    const e = document.createElement('div');
    e.innerHTML = input;
    const node = e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
    return node.slice(0, count) + (node.length > count ? '...' : '');
  };
  return (
    <div>
      {posts &&
        posts.map(post => (
          <Card {...rest} className={classes.root} key={post.id}>
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item sm={6} xs={12}>
                  <LinkButton
                    href={`/${post.slug}`}
                    style={{ display: 'block' }}
                  >
                    <div
                      className={classes.img}
                      style={{
                        backgroundImage: `url(${post.featured_image})`,
                      }}
                    />
                  </LinkButton>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className={classes.postHeading}>
                    <div className="category">
                      <LinkButton to={`/${post.category}`}>
                        {post.category}
                      </LinkButton>
                    </div>
                    <LinkButton href={`/${post.slug}`} className="post-link">
                      <Typography variant="h4">{post.title}</Typography>
                    </LinkButton>
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
                    <div className="post-content">
                      <Typography variant="body1" component="div">
                        {ReactHtmlParser(htmlDecode(post.content, 250))}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

PostCard.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default PostCard;
