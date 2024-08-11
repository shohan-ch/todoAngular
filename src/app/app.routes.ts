import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { checkAuthGuard } from './guards/check-auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [checkAuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'todos', component: TodoComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
