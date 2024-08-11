import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { loginAction } from '../store/auth/auth.actions';

export interface ILogin {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  store = inject(Store);
  authUser: ILogin = {
    userName: 'admin',
    password: '12345',
  };

  logIn(data: ILogin) {
    console.log(data, 'from sevice');
    if (
      data.userName == this.authUser.userName &&
      data.password == this.authUser.password
    ) {
      localStorage.setItem('user', data.userName);
      this.store.dispatch(loginAction());
      return true;
    }
    return false;
  }
}
