/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_RECENT_POSTS = 'app/LOAD_RECENT_POSTS';
export const LOAD_RECENT_POSTS_ERROR = 'app/LOAD_RECENT_POSTS_ERROR';
export const LOAD_RECENT_POSTS_SUCCESS = 'app/LOAD_RECENT_POSTS_SUCCESS';

export const LOAD_CATEGORIES = 'app/LOAD_CATEGORIES';
export const LOAD_CATEGORIES_SUCCESS = 'app/LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'app/LOAD_CATEGORIES_ERROR';
