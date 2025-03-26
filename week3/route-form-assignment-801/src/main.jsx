import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import FavouritesPage from './pages/FavouritesPage.jsx';
import './index.css'
import App from './App.jsx'
import SignUpPage from './pages/SignUpPage.jsx';
import FavouriteDetailPage from './pages/FavouriteDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/favorite",
        element: <FavouritesPage/>
      },
      {
        path: "favorite/:id",
        element: <FavouriteDetailPage />,
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
