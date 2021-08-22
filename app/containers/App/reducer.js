/*
 *
 * CategoryPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_ERROR,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
} from './constants';

export const initialState = {
  postData: true,
  recentPosts: { loading: false, error: false, data: false },
  categories: {
    loading: false,
    error: false,
    data: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const AppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_RECENT_POSTS:
        draft.recentPosts.loading = true;
        draft.recentPosts.error = false;
        draft.recentPosts.data = false;
        break;

      case LOAD_RECENT_POSTS_SUCCESS:
        draft.recentPosts.data = action.posts;
        draft.recentPosts.loading = false;
        break;

      case LOAD_RECENT_POSTS_ERROR:
        draft.recentPosts.error = action.error;
        draft.recentPosts.loading = false;
        break;
      case LOAD_CATEGORIES:
        draft.categories.loading = true;
        draft.categories.error = false;
        draft.categories.data = false;
        break;

      case LOAD_CATEGORIES_SUCCESS:
        draft.categories.data = action.categories;
        draft.categories.loading = false;
        break;

      case LOAD_CATEGORIES_ERROR:
        draft.categories.error = action.error;
        draft.categories.loading = false;
        break;
    }
  });

export default AppReducer;
