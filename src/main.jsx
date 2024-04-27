import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Navbar/Root/Root.jsx';
import ErrorPage from './components/EroorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/Authprovider/AuthProvider.jsx';
import AllTourist from './components/AllTouristSpot/AllTourist.jsx';
import AddTouristSpot from './components/AddTouristSpot/AddTouristSpot.jsx';
import MyList from './components/Mylist/MyList.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx';
import ViewTouristSpotsDetails from './components/ToristSpots/ViewTouristSpotsDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tourists')
      },
      {
        path: '/allTourist',
        element: <AllTourist></AllTourist>
      },
      {
        path: '/addTourist',
        element: <PrivateRoute> <AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/spotSectionDetails/:id',
        element: <PrivateRoute><ViewTouristSpotsDetails></ViewTouristSpotsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/tourists/${params.id}`)
      }


    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
