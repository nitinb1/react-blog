/**
 *
 * PostPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Typography,
  Grid,
  CardContent,
  CircularProgress,
  Alert,
  Divider,
} from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import AccessTime from '@material-ui/icons/AccessTime';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MissedPosts from 'components/MissedPosts';
import LinkButton from 'components/LinkButton';
import SideItem from 'components/SideItem';
import { makeSelectRecentPosts, makeSelectCategories } from '../App/selectors';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPost,
} from './selectors';
import { loadPost } from './actions';
import reducer from './reducer';
import saga from './saga';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  postContainer: {
    margin: theme.spacing(6),
    '@media (max-width: 900px)': {
      margin: theme.spacing(2),
    },
  },
  img: {
    height: 'auto',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  inner: {
    minWidth: 300,
  },
  button: {
    padding: 0,
    color: 'gray',
    flexGrow: 0.1,
  },
  publishDetails: {
    padding: '1rem',
  },
}));
export function PostPage({
  post,
  onLoadPost,
  error,
  loading,
  recentPosts,
  categories,
  match,
}) {
  const classes = useStyles();
  useInjectReducer({ key: 'postPage', reducer });
  useInjectSaga({ key: 'postPage', saga });

  const { slug } = match.params;

  useEffect(() => {
    // When slug not null, call the action to load repos
    if (slug) onLoadPost(slug);
  }, [slug]);

  const htmlDecode = input => {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };
  return (
    <div className={classes.root}>
      {post && (
        <Helmet>
          <title>{post.title} | React Blog</title>
          <meta name="description" content={post.title} />
        </Helmet>
      )}

      <div className={classes.postContainer}>
        <Grid container spacing={4}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            {post && (
              <Card className={classes.content}>
                <CardContent>
                  <div className="category">
                    <LinkButton href={`/${post.category}`}>
                      {post.category}
                    </LinkButton>
                  </div>
                  <Typography variant="h4">{post.title}</Typography>
                  <div className={classes.publishDetails}>
                    <LinkButton className={classes.button} href={post.pubDate}>
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
                  <Divider />
                  <img
                    className={classes.img}
                    alt=""
                    src={post.featured_image}
                  />
                  <div className="post-content">
                    <Typography variant="body1" component="div">
                      {ReactHtmlParser(htmlDecode(post.content, 250))}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item lg={4} md={4} xl={3} xs={12}>
            <SideItem itemTitle="Recent Posts" items={recentPosts} />
            <SideItem
              itemTitle="Cetegories"
              linkTo="category/"
              items={categories}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MissedPosts itemTitle="You Missed" items={recentPosts} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PostPage.propTypes = {
  loading: PropTypes.bool,
  recentPosts: PropTypes.object,
  categories: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadPost: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  recentPosts: makeSelectRecentPosts(),
  categories: makeSelectCategories(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPost: slug => dispatch(loadPost(slug)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostPage);
