import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

// import React from 'react';
export const axiosSecure = axios.create({
    baseURL: 'https://b9a12-server-side-shameha.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const{logOut} = useAuth();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access token')
        console.log("interseptors",token);
        config.headers.authorization=`bearer ${token}`;
        return config;
    },function(error){
        return Promise.reject(error);
    })
    axiosSecure.interceptors.response.use(function(response){
        return response;
      },async (error)=>{
        const status = error.response.status;
        console.log('status error in the interceptors',status);
        // 401 an 403 logout the user and move the user to the login page
        if(status === 401 || status ===403){
          await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
      })
    return axiosSecure;
};
export default useAxiosSecure;
