import { loadPost } from '../actions';
import { LOAD_POST } from '../constants';

describe('PostPage actions', () => {
  describe('Default Action', () => {
    it('has a type of LOAD_POST', () => {
      const expected = {
        type: LOAD_POST,
      };
      expect(loadPost()).toEqual(expected);
    });
  });
});
