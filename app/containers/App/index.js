/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import HomePage from 'containers/HomePage/Loadable';
import CategoryPage from 'containers/CategoryPage/Loadable';
import PostPage from 'containers/PostPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import { loadRecentPosts, loadCategories } from './actions';
import reducer from './reducer';
import saga from './saga';
import GlobalStyle from '../../global-styles';

export function App({ onLoadRecentPosts, onLoadCategories }) {
  useInjectReducer({ key: 'App', reducer });
  useInjectSaga({ key: 'App', saga });
  useEffect(() => {
    onLoadRecentPosts();
    onLoadCategories();
  }, []);

  // const data = useSelector(state => state.App.postData);
  // console.log(data);
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/category/:category" component={CategoryPage} />
          <Route exact path="/:slug" component={PostPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Header>
      <GlobalStyle />
    </Router>
  );
}

App.propTypes = {
  onLoadRecentPosts: PropTypes.func,
  onLoadCategories: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onLoadRecentPosts: () => dispatch(loadRecentPosts()),
    onLoadCategories: () => dispatch(loadCategories()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
