import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isSubmit = false;
  formData = {
    userName: '',
    password: '',
  };

  handleSubmit(form: NgForm) {
    this.isSubmit = true;
    if (form.valid) {
      // console.log(form.value);
      let isLogin = this.authService.logIn(form.value);
      if (isLogin) {
        this.router.navigate(['dashboard']);
        form.reset();
        this.isSubmit = false;
      } else {
        alert('Username or password not match');
      }
    }
  }
}
