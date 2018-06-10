import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';

const getAuthState = createFeatureSelector('auth');

export const getFullname = createSelector(getAuthState, (store: State) => store.fullname);
export const getAuth = createSelector(getAuthState, (store: State) => store.auth);
