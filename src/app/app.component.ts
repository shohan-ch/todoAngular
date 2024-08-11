import { CommonModule } from '@angular/common';
import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { logoutAction } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnChanges {
  title = 'todo';
  router = inject(Router);
  store = inject(Store);
  auth$ = this.store.select('auth');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLogin'] && changes['isLogin'].currentValue) {
      console.log(changes['isLogin'].currentValue);
      alert(changes['isLogin'].currentValue);
    }
  }

  handleLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this.store.dispatch(logoutAction());
  }
}
