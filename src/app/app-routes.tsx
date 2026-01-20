import { redirect } from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import { routes as landingPageRoute } from './landing-page/landing-page-routes';
import UserDashboard from './user-dashboard/user-dashboard';
import InventoryPage from './inventory-page/inventory-page';

export const routes = [
  { index: true, loader: () => redirect('landing-page') },
  { path: 'landing-page', element: <LandingPage />, text: 'Landing Page', children: landingPageRoute },
  { path: 'user-dashboard', element: <UserDashboard />, text: 'User Dashboard' },
  { path: 'inventory-page', element: <InventoryPage />, text: 'Inventory Page' }
];
