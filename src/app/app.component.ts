import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnChanges {
  title = 'todo';
  router = inject(Router);

  isLogin = localStorage.getItem('user') && true;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLogin'] && changes['isLogin'].currentValue) {
      console.log(changes['isLogin'].currentValue);
      alert(changes['isLogin'].currentValue);
    }
  }

  handleLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this.isLogin = false;
  }
}
