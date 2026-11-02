import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

export type AuthState = {
  token: string | null;
  userId: number | null;
  isLoading: boolean;
  error: string | null;
};

export const initialAuthState: AuthState = {
  token: null,
  userId: null,
  isLoading: false,
  error: null,
};

export const authFeatures = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialAuthState,
    on(authActions.loginSuccess, (state, { token }) => ({
      ...state,
      token,
    })),
    on(authActions.loginFailure, (state, { error }) => ({
      ...state,
      token: null,
      error,
    })),
    on(authActions.loginSuccess, (state, { token }) => ({
      ...state,
      token,
    })),
    on(authActions.login, (state) => ({
      ...state,
      token: null,
      error: null,
    })),

    on(authActions.register, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    })),
    on(authActions.registerSuccess, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(authActions.registerFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })),
  ),
});
