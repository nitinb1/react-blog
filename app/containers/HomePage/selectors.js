import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categoryPage state domain
 */

const selectCategoryPageDomain = state => state.HomePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CategoryPage
 */

const makeSelectCategoryPage = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate,
  );

const makeSelectError = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate.error,
  );
const makeSelectPosts = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate.posts,
  );
const makeSelectLoading = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate.loading,
  );
export default makeSelectCategoryPage;
export {
  selectCategoryPageDomain,
  makeSelectError,
  makeSelectPosts,
  makeSelectLoading,
};
