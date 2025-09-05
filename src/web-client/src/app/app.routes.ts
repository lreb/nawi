import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { inject } from '@angular/core';
import { authRoutes } from './features/auth/auth.routes';

export const routes: Routes = [
  { path: 'auth', children: authRoutes },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];

export const AppRouting = RouterModule.forRoot(routes);
