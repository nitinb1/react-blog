/*
 *
 * CategoryPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_POSTS_INIT,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  posts: false,
};

/* eslint-disable default-case, no-param-reassign */
const categoryPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_INIT:
        draft.loading = true;
        draft.error = false;
        draft.posts = false;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.posts = action.posts;
        draft.loading = false;
        break;

      case LOAD_POSTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default categoryPageReducer;
