/*
 *
 * CategoryPage actions
 *
 */

import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_ERROR,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
} from './constants';

export function loadRecentPosts() {
  return {
    type: LOAD_RECENT_POSTS,
  };
}
export function loadPostsSuccess(posts) {
  return {
    type: LOAD_RECENT_POSTS_SUCCESS,
    posts,
  };
}
export function loadPostsError(error) {
  return {
    type: LOAD_RECENT_POSTS_ERROR,
    error,
  };
}

export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}
export function loadCategoriesSuccess(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories,
  };
}
export function loadCategoriesError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error,
  };
}
