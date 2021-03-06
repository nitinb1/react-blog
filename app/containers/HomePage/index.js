/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MissedPosts from '../../components/MissedPosts';
import PostCard from '../../components/PostCard';
import SideItem from '../../components/SideItem';
import Heading from '../../components/Heading';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
} from './selectors';
import { loadPosts } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectRecentPosts, makeSelectCategories } from '../App/selectors';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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

export function HomePage({
  posts,
  loading,
  error,
  onLoadPosts,
  recentPosts,
  categories,
}) {
  const classes = useStyles();
  useInjectReducer({ key: 'HomePage', reducer });
  useInjectSaga({ key: 'HomePage', saga });

  useEffect(() => {
    // When categoryId not null, call the action to load repos
    onLoadPosts();
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Categories | React Blog</title>
        <meta name="description" content="Categories | React Blog" />
      </Helmet>
      <Paper className={classes.heading}>
        <Heading>Latest Posts</Heading>
      </Paper>
      <div className={classes.postContainer}>
        <Grid container spacing={4}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error.toString()}</Alert>}
            {posts && <PostCard posts={posts} />}
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

HomePage.propTypes = {
  loading: PropTypes.bool,
  recentPosts: PropTypes.object,
  categories: PropTypes.object,
  onLoadPosts: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  recentPosts: makeSelectRecentPosts(),
  categories: makeSelectCategories(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts: () => dispatch(loadPosts()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
