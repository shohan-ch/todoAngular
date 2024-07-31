import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isSubmit = false;
  formData = {
    userName: '',
    password: '',
  };

  handleSubmit(form: NgForm) {
    this.isSubmit = true;
    if (form.valid) {
      console.log(this.formData);
      form.reset();
      this.isSubmit = false;
    }
  }
}
