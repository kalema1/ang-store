import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequest } from '../services/auth-api';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{ username: string; password: string }>(),
    loginSuccess: props<{ token: string }>(),
    loginFailure: props<{ error: string }>(),

    register: props<RegisterRequest>(),
    // registerSuccess: props<{ id: number; username: string; password: string; email: string }>(),
    registerSuccess: emptyProps(),
    registerFailure: props<{ error: string }>(),
  },
});
