import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from 'react-router-dom';
import { VscHome, VscMail, VscSettingsGear, VscSignIn } from 'react-icons/vsc';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Dock from './masterLayout/Layout';
import { ErrorPage } from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';

const items = [
  {
    icon: <VscHome size={18} color='white'/>,
    label: 'Home',
    onClick: () => window.location.href = '/',
    className: 'bg-black hover:bg-gray-700'
  },
  {
    icon: <VscMail size={18} color='white'/>,
    label: 'Contact Us',
    onClick: () => window.location.href = '/contact',
    className: 'bg-black hover:bg-gray-700'
  },
  {
    icon: <VscSettingsGear size={18} color='white'/>,
    label: 'Features',
    onClick: () => window.location.href = '/features',
    className: 'bg-black hover:bg-gray-700'
  },
  {
    icon: <VscSignIn size={18} color='white'/>,
    label: 'Login / Register',
    onClick: () => {
      window.location.href = '/auth';
    },
    className: 'bg-black hover:bg-gray-700'
  }
];

function AppLayout() {
  return (
    <div className="min-h-screen relative">
      {/* Main content area - removed flex-col, pb-20, and overflow-auto */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      
      {/* Fixed dock at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
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
        element: <ContactPage/>
      }
    ]
  }
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;