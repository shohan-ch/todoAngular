import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todos', component: TodoComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
