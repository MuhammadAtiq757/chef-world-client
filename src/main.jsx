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
import AuthProvider from './compenents/providers/AuthProvider.jsx';
import Details from './compenents/details/Details.jsx';
import PrivateRoute from './private/PrivateRoute.jsx';


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
     },





     {
      path:"/chefs/:id",
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader:({params})=>
      fetch(`https://classic-project-server-muhammadatiq757.vercel.app/chef/${params.id}`)
      
     },

     

     {
      path: "*",
      element: (<div className="text-center text-6xl mt-20 text-purple-500">
      <div className="card w-full text-center  ">
        <div className="card-body items-center text-center">
          <p>Sorry!!</p>
          
          <img className="img-fluid" src="https://static.vecteezy.com/system/resources/previews/006/618/492/original/error-404-page-not-found-background-free-vector.jpg" />
        </div>
      </div>
    </div>)

     }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
   
  </React.StrictMode>,
)
