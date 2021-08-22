/*
 *
 * PostPage actions
 *
 */

import { LOAD_POST, LOAD_POST_SUCCESS, LOAD_POST_ERROR } from './constants';

export function loadPost(slug) {
  return {
    type: LOAD_POST,
    slug,
  };
}

export function loadPostSuccess(posts) {
  return {
    type: LOAD_POST_SUCCESS,
    posts,
  };
}
export function loadPostError(error) {
  return {
    type: LOAD_POST_ERROR,
    error,
  };
}
