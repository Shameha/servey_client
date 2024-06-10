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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import SurveyPage from "../Pages/Dashboard/SurveyPage/SurveyPage";
import AdminPay from "../Pages/Dashboard/AdminPay/AdminPay";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import Pay from "../Pages/PaymentPage/Pay";


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
          path:'payment',
          element:<PaymentPage></PaymentPage>
          
        },
        {
          path:'pay',
          element:<Pay></Pay>
          
        },
        {
            path:'/checkout/:id',
            element:<VotePage></VotePage>,
            loader:({params})=>fetch(`https://assignment12-server-theta.vercel.app/servey/${params.id}`)
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
          
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
          
        },
        {
          path:'surveys',
          element:<SurveyPage></SurveyPage>
          
        },
        {
          path:'payment',
          element:<AdminPay></AdminPay>
          
        },
        {
          path:'update',
          element:<AdminPay></AdminPay>
          
        }
      ]
    }
  ]);