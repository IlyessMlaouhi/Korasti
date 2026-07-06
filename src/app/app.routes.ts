import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
  { path: 'signup', loadComponent: () => import('./signup/signup').then(m => m.Signup) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'homepage', loadComponent: () => import('./homepage/homepage').then(m => m.Homepage) }
];
