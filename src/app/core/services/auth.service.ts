import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockEmail = 'admin@admin.com';
  private readonly mockPassword = '123';

  login(email: string, password: string): boolean {
    if (email === this.mockEmail && password === this.mockPassword) {
      localStorage.setItem('auth_token', 'mock-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
