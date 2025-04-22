import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberPassword: boolean = false;
  isSubmitting: boolean = false;
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  hasError(control: any, errorType: string): boolean {
    return control?.errors?.[errorType];
  }

  login(form: NgForm){
    this.isSubmitting = true;
    if (!form.valid) {
      console.log('invalid!');
      return;
    }

    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
      this.loginError = false;
    } else {
      this.loginError = true
    }

    this.isSubmitting = false;
  }
}
