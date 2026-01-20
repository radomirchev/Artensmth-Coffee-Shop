import { redirect } from 'react-router-dom';
import LandingPageContent from './landing-page-content/landing-page-content';
import RegisterPage from './register-page/register-page';
import LoginPage from './login-page/login-page';

export const routes = [
  { index: true, loader: () => redirect('landing-page-content') },
  { path: 'landing-page-content', element: <LandingPageContent />, text: 'Landing Page Content' },
  { path: 'register-page', element: <RegisterPage />, text: 'Register Page' },
  { path: 'login-page', element: <LoginPage />, text: 'Login Page' }
];
