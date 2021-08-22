/**
 *
 * CategoryPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, CircularProgress, Alert } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
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
import { makeSelectRecentPosts, makeSelectCategories } from '../App/selectors';
import { loadPosts } from './actions';
import reducer from './reducer';
import saga from './saga';

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
export function CategoryPage({
  loading,
  error,
  posts,
  onLoadPosts,
  recentPosts,
  categories,
  match,
}) {
  const classes = useStyles();
  useInjectReducer({ key: 'categoryPage', reducer });
  useInjectSaga({ key: 'categoryPage', saga });
  const { category } = match.params;

  useEffect(() => {
    // When categoryId not null, call the action to load repos
    if (category) onLoadPosts(category);
  }, [category]);

  return (
    <div>
      <Helmet>
        <title>Categories | React Blog</title>
        <meta name="description" content="Categories | React Blog" />
      </Helmet>

      <div className={classes.root}>
        <Paper className={classes.heading}>
          <Heading>Category: {category.toUpperCase()}</Heading>
        </Paper>
        <div className={classes.postContainer}>
          <Grid container spacing={4}>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              {loading && <CircularProgress />}
              {posts && <PostCard posts={posts} />}
              {error && <Alert severity="error">{error}</Alert>}
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
    </div>
  );
}

CategoryPage.propTypes = {
  loading: PropTypes.bool,
  recentPosts: PropTypes.object,
  categories: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadPosts: PropTypes.func,
  match: PropTypes.object,
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
    onLoadPosts: category => dispatch(loadPosts(category)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CategoryPage);
