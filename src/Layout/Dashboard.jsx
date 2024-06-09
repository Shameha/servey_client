// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdSystemUpdateAlt } from "react-icons/md";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Footer from "../Pages/Shared/Footer/Footer";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-600 text-white">
              <ul className="menu p-4">
                <li><NavLink to="/dashboard/create"><MdCreateNewFolder />Create</NavLink></li>
                <li><NavLink to="/dashboard/surveys"><BsFillPeopleFill />Surveys</NavLink></li>
                <li><NavLink to="/dashboard/update"><MdSystemUpdateAlt />Update</NavLink></li>
              </ul>
            </div>
             
            <div className="flex-1 p-8">
                <Outlet></Outlet>
                
            </div>
        </div>
    );
};

export default Dashboard;