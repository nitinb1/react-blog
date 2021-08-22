import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_POST } from 'containers/PostPage/constants';
import { loadPostSuccess, loadPostError } from 'containers/PostPage/actions';

export function* getPost({ slug }) {
  const requestURL = `posts?slug=${slug}`;
  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(loadPostSuccess(posts[0]));
  } catch (err) {
    yield put(loadPostError(err));
  }
}
// Individual exports for testing
export default function* postPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_POST, getPost);
}
