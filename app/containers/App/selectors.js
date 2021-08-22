import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectAppDomain = state => state.App || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );
const makeSelectRecentPosts = () =>
  createSelector(
    selectAppDomain,
    substate => substate.recentPosts,
  );
const makeSelectCategories = () =>
  createSelector(
    selectAppDomain,
    substate => substate.categories,
  );
export { makeSelectLocation, makeSelectRecentPosts, makeSelectCategories };
