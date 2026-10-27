import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { email, form, FormField, minLength, required, validate } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Button } from '../../shared/components/button/button';
import { FormErrors } from '../../shared/components/form-errors/form-errors';

@Component({
  selector: 'app-register',
  imports: [Button, RouterLink, CommonModule, FormErrors, FormField, FormsModule],
  templateUrl: './register.html',
  host: {
    class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4',
  },
})
export class Register {
  registerModel = signal({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel, (rootpath) => {
    required(rootpath.username, { message: 'Username is required' });
    required(rootpath.email, { message: 'Email is required' });
    email(rootpath.email, { message: 'Please enter a valid email address' });
    required(rootpath.password, { message: 'Password is required' });
    minLength(rootpath.password, 6, { message: 'Password must be at least 6 characters long' });
    required(rootpath.confirmPassword, { message: 'Please confirm your password' });

    validate(rootpath.confirmPassword, ({ value, valueOf }) => {
      const password = valueOf(rootpath.password);
      const confirmPassword = value();

      if (!password) {
        return;
      }

      if (password !== confirmPassword) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match',
        };
      }

      return;
    });
  });

  onRegister(event: Event) {
    event.preventDefault();

    if (this.registerForm().invalid()) {
      this.registerForm().markAsTouched();
      console.log('invalid data');
      return;
    }
    console.log('Registering with:', this.registerModel());
    console.log('Register form with2:', this.registerForm().value());
  }
}
