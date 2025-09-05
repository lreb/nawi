import { Injectable, signal } from '@angular/core';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(null);

  register(user: User) {
    console.log('User registered:', user);
    this.currentUser.set(user);
  }

  login(email: string, password: string) {
    // Ejemplo simple
    if (this.currentUser()?.email === email && this.currentUser()?.password === password) {
      console.log('Login successful');
      return true;
    }
    console.log('Login failed');
    return false;
  }
}
