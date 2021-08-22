/*
 *
 * PostPage reducer
 *
 */
import produce from 'immer';
import { LOAD_POST, LOAD_POST_SUCCESS, LOAD_POST_ERROR } from './constants';

export const initialState = {
  post: false,
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const postPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_POST:
        draft.loading = true;
        draft.error = false;
        draft.post = false;
        break;

      case LOAD_POST_SUCCESS:
        draft.post = action.posts;
        draft.loading = false;
        break;

      case LOAD_POST_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default postPageReducer;
