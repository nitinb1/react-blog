/*
 *
 * CategoryPage actions
 *
 */

import {
  LOAD_POSTS_INIT,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
} from './constants';

export function loadPosts(categoryId) {
  return {
    type: LOAD_POSTS_INIT,
    categoryId,
  };
}
export function loadPostsSuccess(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}
export function loadPostsError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}
