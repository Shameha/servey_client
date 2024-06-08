// import React from 'react';

import { Link } from "react-router-dom";
import logo from "../../../assets/36e23481a685c3c041d29a09d965306a.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const{user,logOut} = useContext(AuthContext);

 const handleLogOut =()=>{
logOut()
.the(()=>{})
.catch(error => console.log(error))

 }

    const navLink=
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/servey'>Surveys Page</Link></li>
    <li><Link to='/payment'>Payment Page</Link></li>
    <li><Link to='/das'>Payment Page</Link></li>
    
    {
      user? <><button onClick={handleLogOut} className="btn btn-ghost">Log out</button></> : <><li><Link to='/login'>Login</Link></li></>
    }
    </>
    return (
        <div className="navbar bg-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <img src={logo} width={50} height={50} alt="" />
          <a className="btn btn-ghost text-xl">SurveySleuth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="tooltip mt-5" data-tip={user?.displayName||""}
>
  
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user?.photoURL||""} /> 


      
    </div>
  </div>
</div>
        </div>
      </div>
    );
};

export default Navbar;