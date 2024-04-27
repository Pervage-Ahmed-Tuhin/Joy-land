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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allTourist',
        element: <AllTourist></AllTourist>
      },
      {
        path: '/addTourist',
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
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
