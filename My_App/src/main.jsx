import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import AuthProvider from './Context/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // element: <div>Hello World</div>,
    children: [
      {
        path: "/home",
        Component: Home
      },
      {
        path: "/allproducts",
        Component: AllProducts
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
