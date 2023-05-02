import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './compenents/Layout/Main.jsx';
import Home from './compenents/Home/Home.jsx';
import Login from './compenents/Login/Login.jsx';
import Signup from './compenents/Signup/Signup.jsx';
import Blog from './compenents/Blog/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
path:"/",
element: <Home></Home>

      },

      {
        path: "login",
        element: <Login></Login>

      },

     {
      path: "signup",
      element:<Signup></Signup>
     },
     {
      path:"blog",
      element:<Blog></Blog>
     }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
