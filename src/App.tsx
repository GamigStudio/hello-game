import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/terms',
    element: <TermsOfService />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;