// import React from 'react';

import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const{googleSignIn}= useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
          
        })
    }
    return (
        <div className="p-8 items-center">
              <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn bg-green-600 items-center">
                    <FaGoogle className="mr-4"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;