import { loadPosts } from '../actions';
import { LOAD_POSTS_INIT } from '../constants';

describe('CategoryPage actions', () => {
  describe('Default Action', () => {
    it('has a type of LOAD_POSTS_INIT', () => {
      const expected = {
        type: LOAD_POSTS_INIT,
      };
      expect(loadPosts()).toEqual(expected);
    });
  });
});
