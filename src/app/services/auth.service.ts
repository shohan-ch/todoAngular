import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ILogin {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
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
      return true;
    }
    return false;
  }
}
