import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_RECENT_POSTS, LOAD_CATEGORIES } from 'containers/App/constants';
import {
  loadPostsSuccess,
  loadPostsError,
  loadCategoriesSuccess,
  loadCategoriesError,
} from 'containers/App/actions';

export function* getRecentPosts() {
  const requestURL = `posts?_limit=4&_sort=id&_order=desc`;
  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(loadPostsSuccess(posts));
  } catch (error) {
    console.log(error);
    yield put(loadPostsError(error.toString()));
  }
}
export function* getCategories() {
  const requestURL = `categories?_sort=order&_order=asc`;
  try {
    // Call our request helper (see 'utils/request')
    const categories = yield call(request, requestURL);
    yield put(loadCategoriesSuccess(categories));
  } catch (error) {
    console.log(error);
    yield put(loadCategoriesError(error.toString()));
  }
}
// Individual exports for testing
export default function* categoryPageSaga() {
  yield takeLatest(LOAD_RECENT_POSTS, getRecentPosts);
  yield takeLatest(LOAD_CATEGORIES, getCategories);
}
