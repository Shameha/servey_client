import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Survey from "../Pages/SurvayMenu/Survey";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import VotePage from "../Pages/VotePage/VotePage";
import Dashboard from "../Layout/Dashboard";
import Create from "../Pages/Dashboard/Create/Create";
import PrivateRoute from "./PrivateRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            

        },
        {
            path:'/servey',
            element:<Survey></Survey>

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/checkout/:id',
            element:<VotePage></VotePage>,
            loader:({params})=>fetch(`http://localhost:5000/servey/${params.id}`)
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'create',
          element:<Create></Create>
          
        }
      ]
    }
  ]);