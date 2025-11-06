import { createSelector } from 'reselect';
const authSelect = (state) => state.auth;

export const selectAuth = (state) => state.auth;
export const selectCurrentAdmin = createSelector([selectAuth], (auth) => auth.current);
export const selectAuthToken = createSelector([selectAuth], (auth) => auth.current?.token);
export const isLoggedIn = createSelector([selectAuth], (auth) => auth.isLoggedIn);
