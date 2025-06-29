import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  Navigate
} from 'react-router-dom';
import { VscHome, VscMail, VscSettingsGear, VscSignIn,VscLayout } from 'react-icons/vsc';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Dock from './masterLayout/Layout';
import { ErrorPage } from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';
import MobileFloatingMenu from './components/child/MobileFloatingMenu';
import FeaturesPage from './pages/FeaturesPage';
import AvailableSoonPage from './pages/AvailableSoonPage';

const items = [
  {
    icon: <VscHome size={18} color='white'/>,
    label: 'Home',
    route:  '/',
    className: 'bg-black hover:bg-gray-700'
  },
  {
    icon: <VscMail size={18} color='white'/>,
    label: 'Contact Us',
    route:  '/contact',
    className: 'bg-black hover:bg-gray-700'
  },
  {
    icon: <VscSettingsGear size={18} color='white'/>,
    label: 'Features',
    route: 'features',
    className: 'bg-black hover:bg-gray-700'
  },
  {
  icon: <VscLayout size={18} color="white" />,
  label: 'Go To Dashboard',
  route: '/dashboard',
  className: 'bg-black hover:bg-gray-700'
}
];

function AppLayout() {
  return (
    <div className="min-h-screen relative">
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Desktop Dock */}
      <div className="fixed hidden sm:block bottom-0 left-0 right-0 z-50">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>

      {/* Mobile FAB */}
      <MobileFloatingMenu />
    </div>
  );
}

// Create router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/features',
        element: <FeaturesPage />
      },
      {
        path: '/dashboard',
        element: <AvailableSoonPage/>
      }
    ]
  }
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;