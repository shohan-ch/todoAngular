import { createReducer, on } from '@ngrx/store';
import { loginAction, logoutAction } from './auth.actions';

// export const autUser = {
//   userName: '',
//   isLogin: false,
// };
export const isLogin = false;

export const authReducer = createReducer(
  isLogin,
  on(loginAction, (state) => (state = true)),
  on(logoutAction, (state) => (state = false))
);
