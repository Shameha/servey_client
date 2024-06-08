import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Survey from "../Pages/SurvayMenu/Survey";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import VotePage from "../Pages/VotePage/VotePage";


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
  ]);