import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-login',
  imports: [Button, RouterLink, FormField, FormsModule],
  templateUrl: './login.html',
  host: {
    class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4',
  },
})
export class Login {
  loginModel = signal({
    username: '',
    password: '',
  });

  loginForm = form(this.loginModel, (rootpath) => {
    required(rootpath.username, { message: 'Username is required' });
    required(rootpath.password, { message: 'Password is required' });
    minLength(rootpath.password, 6, { message: 'Password must be at least 6 characters long' });
  });

  onLogin(event: Event) {
    event.preventDefault();

    if (this.loginForm().invalid()) {
      this.loginForm().markAsTouched(); // surface the field errors
      return;
    }

    // Perform login logic here
    const loginCredentials = this.loginModel();
    // if (!loginCredentials.username || !loginCredentials.password) {
    //   return;
    // }
    console.log('Logging in with:', loginCredentials);
  }
}
