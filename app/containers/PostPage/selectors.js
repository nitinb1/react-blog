import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postPage state domain
 */

const selectPostPageDomain = state => state.postPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostPage
 */

const makeSelectPostPage = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate,
  );

const makeSelectPost = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.post,
  );
const makeSelectError = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.error,
  );
const makeSelectLoading = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.loading,
  );
export default makeSelectPostPage;
export {
  selectPostPageDomain,
  makeSelectPost,
  makeSelectLoading,
  makeSelectError,
};
