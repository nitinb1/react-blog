import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_POSTS_INIT } from 'containers/HomePage/constants';
import { loadPostsSuccess, loadPostsError } from 'containers/HomePage/actions';

export function* getPosts() {
  const requestURL = `posts`;
  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(loadPostsSuccess(posts));
  } catch (err) {
    yield put(loadPostsError(err));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(LOAD_POSTS_INIT, getPosts);
}
