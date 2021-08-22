import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_POSTS_INIT } from 'containers/CategoryPage/constants';
import {
  loadPostsSuccess,
  loadPostsError,
} from 'containers/CategoryPage/actions';

export function* getPosts({ categoryId }) {
  const requestURL = `posts?category=${categoryId}`;
  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(loadPostsSuccess(posts));
  } catch (err) {
    yield put(loadPostsError(err.toString()));
  }
}
// Individual exports for testing
export default function* categoryPageSaga() {
  yield takeLatest(LOAD_POSTS_INIT, getPosts);
}
