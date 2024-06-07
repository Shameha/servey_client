import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import React from 'react';


const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
   const {createuser,updateUseprofile} = useContext(AuthContext);
   const navigate = useNavigate();

      const onSubmit = (data) => {
        console.log(data);
        createuser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUseprofile(data.name,data.image)
            .then(()=>{
                console.log("user profile");
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            })
            .catch(error => console.log(error))
        })
      };
      
    return (
      <>
        <Helmet><title>SurveySleuth | signUp</title></Helmet>
        <div className="hero min-h-screen bg-base-200">

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name",{ required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"  {...register("email",{ required: true })} className="input input-bordered" required />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="Photo" name="image"  {...register("image",{ required: true })} className="input input-bordered" required />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"  {...register("password",{ required: true,minLength:6,maxLength:20 })} name="password" className="input input-bordered" required />
                {errors.passwod?.types === 'required' && <span className="text-red-600">password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
            <p>Already have an account <Link to="/login"> <span className="text-green-600 font-bold">Login</span> </Link></p>
          </div>
        </div>
      </div>
      </>
    );
};

export default SignUp;